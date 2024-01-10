function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "2024-01-20";
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
export default TodoItem1;
