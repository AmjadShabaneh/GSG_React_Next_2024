
import { useState } from 'react'
import './App.css'
import AddTodo from './add-todo/add-todo.component'
import Counter from './counter/counter.component'
import TodoItem from './todo-card/todo-item.component'
 export interface ITask  {
  id: number
  title: string
  urgent:boolean
  completed:boolean
}

function App() {
 const [tasks,setTasks] = useState<ITask[]>([]);
 const [error,setError] = useState<string>('');
 const [createdTasks , setCreatedTasks] = useState<number>(0);
 const [urgentTasks , setUrgentTasks] = useState<number>(0);
 const [completedTasks , setCompletedTasks] = useState<number>(0);
 const doneTask = (id: number) => {
  setTasks((prevTasks) => {
    const updatedTasks = prevTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    const completed = updatedTasks.filter((task) => task.completed).length;
    setCompletedTasks(completed);

    return updatedTasks;
  });
};

 const addTask = (title:string,urgent:boolean)=>{
  if(title!==""){
    const id = Date.now();
  const newTask: ITask = {
    id,
    title,
    urgent,
    completed:false
  }
  setCreatedTasks(prev=>prev+1);
  setUrgentTasks(prev=>urgent?prev+1:prev);


  setTasks([...tasks,newTask]);
  }else{
    setError("Please enter task ");
    console.log(error)
  }
  

 }

 const deleteTask = (id: number) => {
  setTasks((prevTasks) => {
     
    const updatedTasks = prevTasks.filter(task => task.id !== id);

   
    const completed = updatedTasks.filter(task => task.completed).length;
    const urgent = updatedTasks.filter(task => task.urgent).length;

    
    setCompletedTasks(completed);
    setUrgentTasks(urgent);

   
    return updatedTasks;
  });
};

  return (
    <>
    
      <AddTodo addTask={(title,urgent)=>{addTask(title,urgent)}}/>
      <Counter name='Created tasks' counter={createdTasks}/>
      <Counter name='Urgent tasks' counter={urgentTasks}/>
      <Counter name='Completed tasks' counter={completedTasks}/>
      <div className='todos'>
      {
        tasks.map((task) => (
          <TodoItem
          key={task.id}
          id={task.id}
          title={task.title}
          urgent={task.urgent}
          completed={task.completed}
          deleteFun={()=>{deleteTask(task.id)}}
          doneTask={()=>{doneTask(task.id)}}
          />
        ))
      }
        
      </div>
    </>
  )
}

export default App
