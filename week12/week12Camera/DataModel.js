import { initializeApp, getApps } from 'firebase/app';
import { 
  initializeFirestore, setDoc, getDoc, collection, 
} from "firebase/firestore";
import { getStorage, ref } from 'firebase/storage';
import { firebaseConfig } from './Secrets';

let app;
if (getApps().length == 0){
  app = initializeApp(firebaseConfig);
} 
const storage = getStorage(app);
const storageRef = ref(storage);

class DataModel {
    constructor() {
      this.theImage = undefined; // the one and only image in the app
      this.theCallback = undefined; // a callback so that MainScreen can be notified
    }
  
    // this will allow the MainScreen to be notified when a new image is ready
    subscribeToImageUpdate = (callback) => {
      this.theCallback = callback;
    }
  
    // this will allow the CameraScreen to update the image
    updateImage = (imageObject) => {
      //imageObject format: {uri: xxx, width: yyy, height: zzz}
      this.theImage = imageObject;
      if (this.theCallback) {
        this.theCallback(imageObject);
      }
    }
  }
  
  // the singleton pattern, same as before
  let theDataModel = undefined;
  export function getDataModel() {
    if (!theDataModel) {
      theDataModel = new DataModel();
    }
    return theDataModel;
  }
  