import db from "./firestore.config";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'

// Collection ref
// const collectionReference = collection(db, 'newsletter');

// Get collection data
// getDocs(collectionReference).then(snapshot => {
//     let issues = [];
//     snapshot.docs.forEach(doc => {
//         issues.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(issues);
// }).catch(err => {
//     console.log(err.message);
// });

export const createSbscription = async (text)=> {
    const collectionReference = collection(db, 'newsletter');
    console.log("email: " + text);
    addDoc(collectionReference, {
        channel: "en",
        email: text,
        state: true
    });
};