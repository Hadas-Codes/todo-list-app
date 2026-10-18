function TodoList() {
const tasks = ["ללמוד ריאקט", "לסדר את החדר", "לקנות חלב"];
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
        </li>
      ))}
    </ul>
  );}

  export default TodoList