import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


     const config = {
    apiKey: "AIzaSyCYsvdBPYqvQ6588s0jlmXebc7l5M-3Tdc",
    authDomain: "allrange-86af5.firebaseapp.com",
    databaseURL: "https://allrange-86af5.firebaseio.com",
    projectId: "allrange-86af5",
    storageBucket: "allrange-86af5.appspot.com",
    messagingSenderId: "926845487458",
    appId: "1:926845487458:web:366b170234df9c0f38843b",
    measurementId: "G-PCRCZTYPN3"
  };
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`)
const snapShot = await userRef.get();
    if(!snapShot.exists){
      const { displayName, email} =userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error){
      console.log('error creating user', error.message);
    }
      }
return userRef;
  };

  export const addCollectionandDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    return await batch.commit()
  };


  // fetch data code below to send our data as defined in the lifecycle method in shop component to our firestore db
export const convertCollectionsSnapshotToMap =(collections) => {
  const transformedCollection = collections.docs.map(doc =>{
    const {title, items } = doc.data();
    return {
      routeName:encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  //change below code to console.log transformedCollection initially.
  // code below takes the first object eg; hats and passes it into the function as a lowercase title
  //stored in the db collection and does that continously for other titles.

 return transformedCollection.reduce((accumulator, collection) => {
accumulator[collection.title.toLowerCase()] = collection;
return accumulator;
}, {});
}
// fetch data code stopped here

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;