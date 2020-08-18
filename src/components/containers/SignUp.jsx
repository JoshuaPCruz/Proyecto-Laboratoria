import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../firebase";
import Styles from "../../styles/containers/LoginSignupStyles";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/Login");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <Styles.Window>
      <Styles.Span>
        <p>SIGNUP</p>
      </Styles.Span>
      <Styles.Form onSubmit={handleSignUp}>
        <Styles.Label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </Styles.Label>
        <Styles.Label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </Styles.Label>
        <Styles.Div>
          <button type="submit">Sign up</button>
        </Styles.Div>
      </Styles.Form>
    </Styles.Window>
  );
};

export default withRouter(SignUp);