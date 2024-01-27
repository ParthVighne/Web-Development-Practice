/* eslint-disable react/prop-types */
const WelcomeMessege = ({ onGetPostClick }) => {
  return (
    <center className="welcome-messege">
      <h1>There are no posts</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostClick}
      >
        Get Posts from Server
      </button>
    </center>
  );
};

export default WelcomeMessege;
