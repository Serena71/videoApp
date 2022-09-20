import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from './Avatar';
import { LoginButton } from './LoginButton';
import NewVideo from './NewVideo';

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
  caret-color: ${({ theme }) => theme.text};
  outline: none;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input placeholder=" Search"></Input>
            <SearchOutlinedIcon />
          </Search>
          {currentUser ? (
            <User>
              <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
              <Avatar width="36" height="36" src={currentUser.img} />
              {currentUser.name}
            </User>
          ) : (
            <Link to="signin" style={{ textDecoration: 'none' }}>
              <LoginButton />
            </Link>
          )}
        </Wrapper>
      </Container>
      <NewVideo open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
