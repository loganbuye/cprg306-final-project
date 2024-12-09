"use client"

import TaskList from "./task-list";
import ToDoForm from "./to-do-form";


export default function ToDoPage() {


    return(
        <div>
            <ToDoForm />
            <TaskList />
        </div>
    );
}