import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpForm(props: {
  handleClick: (formData: ISignUp) => void;
}) {
  const [email, setEmail] = useState("");
  {
    /* 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
*/
  }
  const submitData = () => {
    const submitData: ISignUp = {
      email: email,
    };

    props.handleClick(submitData);
  };

  return (
    <div className="container">
      <br />
      <h2>Heya, Thanks for checking out CredoB!</h2>
      <br />
      <p>
        We’re not quite ready yet to show you around, but if you would like to
        join our mailing list, we’ll be in touch when we go live!
      </p>
      <br />
      <form>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            value={email}
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/*
        <div className="mb-3">
          <label htmlFor="inputFirstName" className="form-label">
            FirstName
          </label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            id="inputFirstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <label htmlFor="inputLastName" className="form-label">
            LastName
          </label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            id="inputLastName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
*/}
        <br />
        <button type="button" className="btn btn-primary" onClick={submitData}>
          Signup
        </button>
      </form>
      <br />

      <p>
        Also, if you have any questions in the meantime, feel free to message us
        at{" "}
      </p>

      <a href="mailto:kb@credob.com" target="_blank">
        kb@credob.com
      </a>
    </div>
  );
}
