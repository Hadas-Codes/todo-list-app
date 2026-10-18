import TodoItem from './TodoItem';

function TodoList() {
const tasks = ["ללמוד ריאקט", "לסדר את החדר", "לקנות חלב"];
  return (
   <ul>
  {tasks.map((task, index) => (
    <TodoItem key={index} task={task} />
  ))}
</ul>
  );}

  export default TodoList