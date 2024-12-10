"use client"

import Task from "./task";

export default function TaskList({ tasks = [] }) {
    
    
    return(
        <section className="grid grid-cols-2 gap-4">
            {
                tasks.map((task) => {
                    return <Task key={task.id} taskObj={task} />
                })
            }
        </section>
    );
}