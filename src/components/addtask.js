
import {useState} from 'react'
const Addtask = ({onAdd}) => {
    const[text,setText]=useState('')
    const[time,setTime]=useState('')
    const[reminder,setReminder]=useState(false)

const onSubmit=(e)=>
{
    e.preventDefault()

    if(!text)
    {
        alert('Please add a Task');
        return
    }
    onAdd({text,time,reminder})
    setText(' ');
    setTime(' ');
    setReminder(false);
}


    return (
        
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label >Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label >Date</label>
                <input type="text" placeholder="Add Task" value={time} onChange={(e)=>setTime(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label >Reminder</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit"value="Save-Task" className='btn btn-block' value="SaveTask" />
        </form>
        
    )
}

export default Addtask
