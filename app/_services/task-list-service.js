import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getTasks(userId, taskStateSetter) {
    try {
        const taskCollection = collection(db, "users", userId, "tasks");
        const tasksQuery = query(taskCollection);
        const querySnapshot = await getDocs(tasksQuery);
        let tasksList = [];
        querySnapshot.forEach( (docSnap) => {
            let task = {
                id: docSnap.id,
                ...docSnap.data()
            };
            tasksList.push(task);
        });
        taskStateSetter(tasksList);
    } catch (error) {
        console.log(error);
    }
}

export async function addTask(userId, task) {
    try {
        const tasksCollection = collection(db, "users", userId, "items");
        const docRef = await addDoc(tasksCollection, task);
        return docRef.id;
    } catch (error) {
        console.log(error);
    }
}