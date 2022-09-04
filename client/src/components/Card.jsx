import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from './Avatar';

const Container = styled.div`
  width: 360px;
  margin-bottom: 30px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 202px;
  background-color: #fff;
`;

const CardDetail = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 16px;
`;

const CardText = styled.div``;

const Title = styled.h1`
  margin-top: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  margin: 10px 0;
  color: ${({ theme }) => theme.textSoft};
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="video/test" style={{ textDecoration: 'none' }}>
      <Container>
        <CardImg />
        <CardDetail>
          <Avatar width="36" height="36" />
          <CardText>
            <Title>Card title</Title>
            <ChannelName>Author name</ChannelName>
            <Info>Video Info</Info>
          </CardText>
        </CardDetail>
      </Container>
    </Link>
  );
};

export default Card;
