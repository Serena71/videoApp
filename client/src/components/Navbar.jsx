import React from 'react';
import styled from 'styled-components';
import { LoginButton } from './LoginButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  border: 1px solid #aaaaaa;
  border-radius: 5px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  margin-left: 10px;
  width: 90%;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search"></Input>
          <SearchOutlinedIcon />
        </Search>
        <Link to="signin" style={{ textDecoration: 'none' }}>
          <LoginButton />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
