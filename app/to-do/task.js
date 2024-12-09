export default function Task({title, description, dueDate, priority}) {

    return(
        <div>
            <ul>
                <div>
                    <li>{title}</li>
                    <li>{description}</li>
                    <li>{dueDate}</li>
                    <li>{priority}</li>
                </div>
            </ul>
        </div>
    );
}