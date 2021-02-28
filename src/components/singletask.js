import {FaTimes} from 'react-icons/fa'
const Task = ({task,OnDelete,onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ' '}`} onDoubleClick={()=>onToggle(task.id)} >
            <h3>{task.text}<FaTimes style={{color:'red'}} onClick={()=>OnDelete(task.id)} /> </h3>
            <h5>{task.time}</h5>

        </div>
    )
}

export default Task
