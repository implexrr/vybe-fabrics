import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="errorPage">
      <h1 className="errorHeader">404: Lost in the Drop</h1>
      <p className="errorSubhead">
        This page sold out before you even got here.
      </p>
      <p className="errorText">
        Maybe it was a secret collab. Maybe it never existed. Either way, you're not getting it now.
      </p>
      <Link className="home" to="/">Back to reality</Link>
    </section>
  );
};

export default ErrorPage;
// TDL