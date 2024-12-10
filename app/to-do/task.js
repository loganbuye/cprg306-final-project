export default function Task({taskObj}) {
    
    const {title, description, id, dueDate, priority} = taskObj;

    return(
        <div className="rounded bg-blue-300 p-2 max-w-96">
            <div className="inline-block align-middle ml-3"> 
                <h3 className="text-xl">{title}</h3>
                <p className="text-lg">{description}</p>
                <p className="text-lg">{id}</p>
                <p className="text-lg">{dueDate}</p>
                <p className="text-lg">{priority}</p>
            </div>
        </div>
    );
}