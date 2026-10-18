import TodoItem from './TodoItem';
import { useState } from 'react';

function TodoList() {
const  [tasks, setTasks] = useState (["ללמוד ריאקט", "לסדר את החדר", "לקנות חלב"]);
const [newTask, setNewTask] = useState("");

const handleAddTask = () => {
  if (newTask.trim() !== ''){
    setTasks([...tasks , newTask])
    setNewTask('')
  }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="הקלידי משימה חדשה..." 
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
<button onClick={handleAddTask}>אישור</button>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
      </ul>
    </div>
  );}

  export default TodoList