function TodoItem2() {
  let todoName = "Do Homework";
  let todoDate = "2024-01-15";
  return (
    <>
      <div className="row m-2">
        <div className="col">{todoName}</div>
        <div className="col">{todoDate}</div>
        <div className="col">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </>
  );
}
export default TodoItem2;
