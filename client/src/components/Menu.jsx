import React from 'react';
import styled from 'styled-components';

import { menuItemList1, menuItemList2, menuItemList3, menuItemList4 } from './MenuItemList';

import { LoginButton } from './LoginButton';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
  height: 100vh;
`;

const Wrapper = styled.div`
  margin: 1rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 7.5px;
  gap: 20px;
  /* background-color: inherit; */
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft}; ;
`;

const Signin = styled.div`
  padding: 7.5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo>
            <Img />
            Youtube
          </Logo>
        </Link>

        {menuItemList1.map((item) => (
          <Link key={item.name} to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Item>
              {item.icon}
              {item.name}
            </Item>
          </Link>
        ))}
        <Hr variant="middle" />
        {menuItemList2.map((item) => (
          <Link key={item.name} to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Item>
              {item.icon}
              {item.name}
            </Item>
          </Link>
        ))}
        <Hr variant="middle" />

        {!currentUser && (
          <>
            <Signin>
              Sign in to like videos, comment, and subscribe.
              <Link to="signin" style={{ textDecoration: 'none' }}>
                <LoginButton />
              </Link>
            </Signin>

            <Hr variant="middle" />
          </>
        )}
        <Title>Find More</Title>

        {menuItemList3.map((item) => (
          <Link key={item.name} to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Item>
              {item.icon}
              {item.name}
            </Item>
          </Link>
        ))}

        <Hr variant="middle" />

        {menuItemList4.map((item) => {
          if (item.name === 'Mode') {
            return (
              <Item
                key={item.name}
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              >
                {item.icon}
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </Item>
            );
          } else {
            return (
              <Link key={item.name} to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Item>
                  {item.icon}
                  {item.name}
                </Item>
              </Link>
            );
          }
        })}
      </Wrapper>
    </Container>
  );
};

export default Menu;
