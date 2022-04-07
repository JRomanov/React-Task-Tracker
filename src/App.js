import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"


function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: "Appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true
        },
        {
            id: 2,
            text: "Food shopping",
            day: "Feb 6th at 12:30pm",
            reminder: true  
        },
        {
            id: 3,
            text: "Watch sunset",
            day: "Feb 6th at 7:30pm",
            reminder: false
        }
    ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} onDelete = {deleteTask}/>
    </div>
  );
}

export default App;
