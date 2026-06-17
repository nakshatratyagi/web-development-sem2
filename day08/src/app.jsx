import React, { useState } from 'react'


const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  const handleAdd = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  }
  const handleDelete = (index) => {
  let updatedTask = tasks.filter((_, i) => i !== index);
  setTasks(updatedTask);}
  }
  const handleEdit = (index) => {

  }
  return (
    <div>
      <h1>TO DO LIST</h1>
      <input type="text" name="task" id="task"
        placeholder='Enter Task Here'
        value={task}
        onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      <div>
        <h2>Tasks</h2>
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>
              <p>{t}</p>
              <button onClick={() => handleEdit(index)}>EDIT</button>
              <button onClick={() => handleDelete(index)}>DELETE</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )


export default App;