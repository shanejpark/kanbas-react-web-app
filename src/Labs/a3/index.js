import { useSelector } from "react-redux";
import ConditionalOutput from "./ConditionalOutput";
import DynamicStyling from "./DynamicStyling";
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Styles from "./Styles";
import TodoList from "./todos/TodoList";

function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);
  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>

      <TodoList />
      <ConditionalOutput />
      <Styles />
      <DynamicStyling />
      <JavaScript />
      <PathParameters />
    </div>
  );
}
export default Assignment3;
