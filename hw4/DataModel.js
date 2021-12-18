// utility function for getting unique keys
// will go away when we start using persistent storage
let nextKey = 1;
function getNextKey() {
  return '' + nextKey++;
}

class DataModel {
  constructor() {
    this.todoList = [];
    this.subscribers = []; 

    //hardcoded list for testing
    this.todoList.push({text: "Get milk", key: getNextKey(), checked: false});
    this.todoList.push({text: "Pick up dry cleaning", key: getNextKey(), checked: false});
    this.todoList.push({text: "Pay rent", key: getNextKey(), checked: false});   
  }

  subscribeToUpdates(callback) {
    console.log("new subscriber: ", callback);
    this.subscribers.push(callback);
  }

  updateSubscribers() {
    for (let sub of this.subscribers) {
      sub(); // just tell them there's an update
    }
  }

  addItem(item) {
    item.key = getNextKey();
    item.checked = false;
    this.todoList.push(item);
    this.updateSubscribers();
  }

  deleteItem(key) {
    let idx = this.todoList.findIndex((elem)=>elem.key===key);
    this.todoList.splice(idx, 1);
    this.updateSubscribers();
  }

  updateItem(key, newItem) {
    let idx = this.todoList.findIndex((elem)=>elem.key===key);
    this.todoList[idx] = newItem;
    this.updateSubscribers();
  }

  checkItem(key) {
    let idx = this.todoList.findIndex((elem)=>elem.key===key);
    this.todoList[idx].checked = !this.todoList[idx].checked;
    this.updateSubscribers();
  }

  getItem(key) {
    let idx = this.todoList.findIndex((elem)=>elem.key===key);
    return this.todoList[idx];
  }

  getTodoList() {
    return this.todoList;
  }

  getTodoListCopy() {
    return Array.from(this.todoList);
  }
}

let theDataModel;

export function getDataModel() {
  if (!theDataModel) {
    theDataModel = new DataModel();
  }
  return theDataModel;
}