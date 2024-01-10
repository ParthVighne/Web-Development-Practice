import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function TodoItems({ todoItems }) {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
          ></TodoItem>
        ))}

        {/* <TodoItem todoName="Go to College" todoDate="04/02/2023"></TodoItem>
        <TodoItem todoName="Meet friends" todoDate="04/02/2023"></TodoItem> */}
      </div>
    </>
  );
}
export default TodoItems;
