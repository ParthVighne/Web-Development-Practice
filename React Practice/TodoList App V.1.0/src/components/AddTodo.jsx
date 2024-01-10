function AddTodo() {
  return (
    <>
      <div className="row m-2">
        <div className="col">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col">
          <input type="date" />
        </div>
        <div className="col">
          <button className="btn btn-success">Add</button>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
