import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../firebase.js";
import { AuthContext } from "../../Auth.js";
import Styles from "../../styles/containers/LoginSignupStyles";


const Login = ({ history }) => {
  
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  const handleSignUp = ()=>{
    history.push("/signup");
  }

  return (
    <Styles.Window>
      <Styles.Span>
        <p>LOGIN</p>
      </Styles.Span>
      <Styles.Form onSubmit={handleLogin}>
        <Styles.Label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </Styles.Label>
        <Styles.Label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </Styles.Label>
        <Styles.Div>
          <button type="submit">Log in</button>
          <button onClick={handleSignUp}>Sign up</button>
        </Styles.Div>
      </Styles.Form>
    </Styles.Window>
  );
};

export default withRouter(Login);