import React from 'react';
import styled from 'styled-components';

import {
  menuItemList1,
  menuIconList1,
  menuItemList2,
  menuIconList2,
  menuItemList3,
  menuIconList3,
  menuItemList4,
  menuIconList4,
} from './MenuItemList';

import { LoginButton } from './LoginButton';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
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
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo>
            <Img src="img.svg" />
            Youtube
          </Logo>
        </Link>

        {menuItemList1.map((item, idx) => (
          <Item key={idx}>
            {menuIconList1[idx]}
            {item}
          </Item>
        ))}
        <Hr variant="middle" />
        {menuItemList2.map((item, idx) => (
          <Item key={idx}>
            {menuIconList2[idx]}
            {item}
          </Item>
        ))}
        <Hr variant="middle" />

        <Signin>
          Sign in to like videos, comment, and subscribe.
          <LoginButton />
        </Signin>

        <Hr variant="middle" />
        <Title>Find More</Title>
        {menuItemList3.map((item, idx) => (
          <Item key={idx}>
            {menuIconList3[idx]}
            {item}
          </Item>
        ))}
        <Hr variant="middle" />
        {menuItemList4.map((item, idx) => {
          if (item === 'Mode') {
            item = darkMode ? 'Light Mode' : 'Dark Mode';
            return (
              <Item
                key={idx}
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              >
                {menuIconList4[idx]}
                {item}
              </Item>
            );
          }
          return (
            <Item key={idx}>
              {menuIconList4[idx]}
              {item}
            </Item>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Menu;
