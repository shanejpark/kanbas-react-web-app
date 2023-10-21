import ConditionalOutput from "./ConditionalOutput";
import DynamicStyling from "./DynamicStyling";
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Styles from "./Styles";
import TodoList from "./todos/TodoList";

function Assignment3() {
  return (
    <div className="container">
      <h1>Assignment 3</h1>
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