import { initializeApp, getApps } from 'firebase/app';
import { 
  initializeFirestore, collection,  
  query, orderBy, where, onSnapshot,
  doc, addDoc, updateDoc, deleteDoc
} from "firebase/firestore";
import { firebaseConfig } from './Secrets';

let app;
if (getApps().length == 0){
  app = initializeApp(firebaseConfig);
} 
const db = initializeFirestore(app, {
  useFetchStreams: false
});

class DataModel {
  constructor() {
    this.todoList = [];
    this.todoListeners = [];
    this.snapshotUnsubscribe = this.subscribeToSnapshot(false, 'desc');
  }

  subscribeToSnapshot(hideCompleted, sortDesc) {
    if (this.snapshotUnsubscribe) {
      this.snapshotUnsubscribe();
    }

    const sortOrder = sortDesc ? 'desc': 'asc';
    let q = query(collection(db, 'todoList'), orderBy('priority', sortOrder));
    if (hideCompleted) {
      q = query(collection(db, 'todoList'), where('checked', '!=', true), orderBy('checked'), orderBy('priority', sortOrder));
    }

    this.snapshotUnsubscribe = onSnapshot(q, (qSnap) => {
      let newTodoList = [];
      qSnap.docs.forEach((docSnap)=>{
        let todoItem = docSnap.data();
        todoItem.key = docSnap.id;
        newTodoList.push(todoItem);
      });
      this.todoList = newTodoList;
      this.notifyTodoListener();
    });
  }

  addTodoListener(callbackFunction) {
    const listenerId = Date.now();
    const listener = {
      id: listenerId,
      callback: callbackFunction
    }
    this.todoListeners.push(listener);
    callbackFunction();
    return listenerId;
  }

/*   addTodoListener(callbackFunction, hideCompleted, sortDesc) {
    const listenerId = Date.now();
    const listener = {
      id: listenerId,
      callback: callbackFunction
    }
    this.todoListeners.push(listener);
    const sortOrder = sortDesc? 'desc': 'asc';

    let q = query(collection(db, 'todoList'), orderBy('priority', sortOrder));
    if (hideCompleted) {
      q = query(collection(db, 'todoList'), where('checked', '!=', true), orderBy('checked'), orderBy('priority', sortOrder));
    }

    onSnapshot(q, (qSnap) => {
      let newTodoList = [];
      qSnap.docs.forEach((docSnap)=>{
        let todoItem = docSnap.data();
        todoItem.key = docSnap.id;
        newTodoList.push(todoItem);
      });
      this.todoList = newTodoList;
      this.notifyTodoListener();
    });

    return listenerId;
  }
 */
  removeTodoListener(listenerId) {
    let idx = this.todoListeners.findIndex((elem)=>elem.id===listenerId);
    this.todoListeners.splice(idx, 1);
  }

  notifyTodoListener() {
    for (const tl of this.todoListeners) {
      tl.callback();
    }
  }

  getTodoList() {
      return this.todoList;
  }

  async addItem(item) {
    const docRef = await addDoc(collection(db, 'todoList'), item);
    item.key = docRef.id;
    this.todoList.push(item);
  }

  async deleteItem(item) {
    const docRef = await doc(db, "todoList", item.key);
    deleteDoc(docRef);
    let idx = this.todoList.findIndex((elem)=>elem.key === item.key);
    this.todoList.splice(idx, 1);
  }

  async updateItem(newItem) {
    const docRef = doc(db, "todoList", newItem.key);
    updateDoc(docRef, {checked: newItem.checked, priority: newItem.priority, text: newItem.text}); 
    let idx = this.todoList.findIndex((elem)=>elem.key === newItem.key);
    this.todoList[idx] = newItem;
  }
}

let theDataModel = undefined;

export function getDataModel() {
  if (!theDataModel) {
    theDataModel = new DataModel();
  }
  return theDataModel;
}
