function Display() {
  let Now = new Date();
  return (
    <>
      <h3 className="text-center m-4 text-danger">
        Date: {Now.toDateString()}
      </h3>
      <h3 className="text-center m-4 text-danger">
        Time: {Now.toLocaleTimeString()}
      </h3>
    </>
  );
}
export default Display;
