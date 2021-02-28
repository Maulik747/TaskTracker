import Header from './components/header'
import React from 'react'
import Tasks from './components/tasks'
import Addtask from './components/addtask'
import Button from './components/button'
import {useState} from 'react'
import { FaCommentsDollar } from 'react-icons/fa'

const App = () => {
  const[showAddtask, setShowaddTask]=useState(false)
  const [tasks,setTasks]=useState([
    {
        id: 1,
        text: "Doctor's Appointment",
        time : "22nd January",
        reminder :true
    },
    {
        id : 2,
        text :"Play Football",
        time: "23rd January",
        reminder: false
    },
    {
       id: 3,
       text: "Water Plants",
       time: "24th January",
       reminder: true
    },
    {
      id : 4,
      text: "Maths Homework",
      time:"25th January",
      reminder: true
    },
    {
      id : 5,
      text: "Date",
      time: "3rd March",
      reminder: false
    }
])
//Addtask



const addTask=(task)=>
{
  const id= Math.floor(Math.random()*1000)+1
  const newTask= {id,...task}
  setTasks([...tasks,newTask])

}

const showloginform=()=>{
  setShowaddTask(!showAddtask)
}
//delete task
const DeleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id !== id))
}
//toggle reminder

const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=>task.id===id ? {...task, reminder:!task.reminder}: task))
}

  return (
    <div className="container">
        <Header title='Task Tracker' onAdd={showloginform} showAdd={showAddtask}/>
       {showAddtask && <Addtask onAdd={addTask} />}
        <Tasks tasks={tasks} OnDelete={DeleteTask} onToggle={toggleReminder}/>
   
    </div>
  )
}

export default App

// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// } #can be done using class

// export default App;
