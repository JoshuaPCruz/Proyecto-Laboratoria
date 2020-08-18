import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { withRouter, Redirect } from "react-router";
import app from "../../firebase.js";
import { AuthContext } from "../../Auth.js";

const Window = styled.section`
position: fixed;
display: grid;
grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
justify-items: center;
width: 30vw;
height: 50vh;
top: 15vh;
left: 33vw;
`
const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
`

const Label = styled.label`
display: flex;
flex-direction: column;
justify-content: center;
`

const Div = styled.div`
display: flex;
justify-content: center;
`

const Span = styled.span`
align-self: center;
`


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
    <Window>
      <Span>
        <p>LOGIN</p>
      </Span>
      <Form onSubmit={handleLogin}>
        <Label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </Label>
        <Label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </Label>
        <Div>
          <button type="submit">Log in</button>
          <button onClick={handleSignUp}>Sign up</button>
        </Div>
      </Form>
    </Window>
  );
};

export default withRouter(Login);