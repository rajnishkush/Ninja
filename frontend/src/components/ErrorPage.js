import "../styles/ErrorPage.css";

const ErrorPage = ({ error }) => {
  return (
    <div className="not-found">
      <h1> 404 - Not Found </h1>
      <p> {error} </p>
    </div>
  );
};

export default ErrorPage;
