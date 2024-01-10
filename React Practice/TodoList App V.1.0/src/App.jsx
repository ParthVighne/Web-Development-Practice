import MyNavbar from "./components/MyNavbar";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <>

      <MyNavbar />
      <div className="container text-center m-5">
        <AddTodo />
        <div className="items-container">
          <TodoItem1 />
          <TodoItem2 />
        </div>
      </div>
    </>
  );
}
export default App;
