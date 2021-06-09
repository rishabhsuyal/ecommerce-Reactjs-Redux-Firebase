import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config={
    apiKey: "AIzaSyCGlAA7bdsRJmZTtU3qVBJInz_KokznKfs",
    authDomain: "e-commerce-a179d.firebaseapp.com",
    projectId: "e-commerce-a179d",
    storageBucket: "e-commerce-a179d.appspot.com",
    messagingSenderId: "1020912331538",
    appId: "1:1020912331538:web:9490e98a6777c4379be1cb",
    measurementId: "G-N63QR89YZX"
};

export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();
    if(!snapShot.exists){
        const {displayName,email}=userAuth;
        const createdAt=new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData 
            })
        }catch(error){
            console.log(error);
        }
    }
    return userRef; 
};

// export const addCollectionAndDocuments= async (collectionkey,objectToAdd)=>{
//     const collectionRef=firestore.collection(collectionkey);
//     const batch=firestore.batch();
//     objectToAdd.forEach(obj=>{
//         const newDocRef=collectionRef.doc();
//         batch.set(newDocRef,obj);
//     });
//     return await batch.commit();
// } 

export const convertCollectionsToMap = (collections) =>{
    const transformCollection=collections.docs.map(doc=>{
        const {title, items}=doc.data();
        return{
            routeName:encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        };
    });
    return transformCollection.reduce((accumulator, collection)=>{
        accumulator[collection.title.toLowerCase()]=collection;
        return accumulator;
    },{});
};

firebase.initializeApp(config);

export const auth=firebase.auth()
export const firestore=firebase.firestore()


const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
