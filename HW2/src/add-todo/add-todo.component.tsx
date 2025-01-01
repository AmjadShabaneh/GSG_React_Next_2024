import { useState } from 'react';
import './add-todo.css';
interface IProps{
    addTask: (title:string,urgent:boolean) => void;
   
}

const AddTodo = (props:IProps)=>{
    const [urgent,setUrgent] = useState<boolean>(false);
    const [task,setTask] = useState<string>("");
    const clearForm = ()=>{
        setTask("");
        setUrgent(false);
    }
    return(
        <form action="" className="todo-form" onSubmit={(e)=>{
            e.preventDefault()
            props.addTask(task,urgent);
            clearForm();
            
        }}>
            <input type="text" name="todo" value={task} className='input todo' onChange={(e)=>{setTask(e.target.value)}} placeholder="Enter your todo"/>
            <div className='checkbox'>
            <input type="checkbox" checked={urgent} name="urgent" id="urgent"  onChange={()=>{
                setUrgent(!urgent)
            }} className='' />          
            <label htmlFor="urgent">Urgent</label>
             </div>

            <button type="submit" className='button submit'>Add Todo</button>
            
        </form>
    )
}
export default AddTodo