import React from 'react';
import styled from 'styled-components';
import ButtonMui from '@mui/material/Button';

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
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Subtitle>to continue as Serena</Subtitle>
        <Input type="text" placeholder="User Name" />
        <Input type="password" placeholder="Password" />
        <Button variant="outlined">Sign in</Button>
        <Subtitle>Or</Subtitle>
        <Title>Sign Up</Title>
        <Input type="text" placeholder="User Name" />
        <Input type="email" placeholder="Email Address" />
        <Input type="password" placeholder="Password" />
        <Button variant="outlined">Sign up</Button>
      </Wrapper>
    </Container>
  );
};

export default Signin;
