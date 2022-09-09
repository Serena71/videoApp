import ButtonMui from '@mui/material/Button';
import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { failedLogin, startLogin, successfulLogin } from '../redux/userSlice';
import { auth, provider } from '../firebase.js';
import { signInWithPopup } from 'firebase/auth';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px); //100vh subtract height of navbar
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-style: 24px;
`;
const Subtitle = styled.h2`
  font-style: 20px;
  font-weight: 300;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  caret-color: ${({ theme }) => theme.text};
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  padding: 10px;
  width: 100%;
`;

const Button = styled(ButtonMui)`
  && {
    background-color: ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.soft};
    &:hover {
      color: ${({ theme }) => theme.textSoft};
      border-color: ${({ theme }) => theme.textSoft};
    }
  }
`;

const Signin = () => {
  const [credentials, setCredentials] = useState({ name: '', password: '' });
  const dispatch = useDispatch();

  const updateCredentials = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const signin = async (e) => {
    e.preventDefault();
    dispatch(startLogin());
    try {
      const res = await axios.post('/auth/signin', credentials);
      dispatch(successfulLogin(res.data)); // storing user data
    } catch (e) {
      dispatch(failedLogin());
    }
  };

  const signInWithGoogle = async () => {
    dispatch(startLogin());
    signInWithPopup(auth, provider)
      .then((result) => {
        axios
          .post('/auth/google', {
            name: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL,
          })
          .then((res) => dispatch(successfulLogin(res.data)));
      })
      .catch((error) => {
        dispatch(failedLogin());
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Subtitle>to continue as Serena</Subtitle>
        <Input type="text" name="name" placeholder="User Name" onChange={updateCredentials} />
        <Input type="password" name="password" placeholder="Password" onChange={updateCredentials} />
        <Button variant="outlined" onClick={signin}>
          Sign in
        </Button>
        <Subtitle>Or</Subtitle>
        <Title>Sign Up</Title>
        <Input type="text" name="name" placeholder="User Name" />
        <Input type="email" name="email" placeholder="Email Address" />
        <Input type="password" name="password" placeholder="Password" />
        <Button variant="outlined">Sign up</Button>

        <Subtitle>Or</Subtitle>
        <Button variant="outlined" onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Signin;
