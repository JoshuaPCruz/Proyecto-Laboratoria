import React, { useCallback } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import app from "../../firebase";

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
    <Window>
      <Span>
        <p>SIGNUP</p>
      </Span>
      <Form onSubmit={handleSignUp}>
        <Label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </Label>
        <Label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </Label>
        <Div>
          <button type="submit">Sign up</button>
        </Div>
      </Form>
    </Window>
  );
};

export default withRouter(SignUp);