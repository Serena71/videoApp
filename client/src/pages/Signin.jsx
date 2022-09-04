import React from 'react';
import styled from 'styled-components';
import ButtonMui from '@mui/material/Button';
import styledMui from '@mui/material/styles/styled';

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

const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Subtitle>to continue as Serena</Subtitle>
        <Input type="email" placeholder="Email Address" />
        <Input type="password" placeholder="Password" />
        <ButtonMui variant="outlined">Sign in</ButtonMui>
        <Subtitle>Or</Subtitle>
        <Title>Sign Up</Title>
        <Input type="email" placeholder="Email Address" />
        <Input type="password" placeholder="Password" />
        <ButtonMui variant="outlined">Sign up</ButtonMui>
      </Wrapper>
    </Container>
  );
};

export default Signin;
