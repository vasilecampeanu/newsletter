import db from "./firestore.config";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'

// Collection ref
const colRef = collection(db, 'newsletter');

// Get collection data
getDocs(colRef).then(snapshot => {
    let issues = [];
    snapshot.docs.forEach(doc => {
        issues.push({ ...doc.data(), id: doc.id });
    });
    console.log(issues);
}).catch(err => {
    console.log(err.message);
});