import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from './Avatar';
import { format } from 'timeago.js';

const Container = styled.div`
  width: ${(props) => props.type !== 'sm' && '360px'};
  margin-bottom: ${(props) => (props.type === 'sm' ? '10px' : '45px')};
  display: ${(props) => props.type === 'sm' && 'flex'};
  gap: 10px;
`;

const CardImg = styled.img`
  width: 100%;
  height: ${(props) => (props.type === 'sm' ? '120px' : '202px')};
  background-color: #bbb;
  flex: 1;
`;

const CardDetail = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.type === 'sm' ? 'column' : 'row')};
  gap: 20px;
  margin-top: ${(props) => props.type !== 'sm' && '16px'};
  flex: 1;
`;

const CardText = styled.div`
  color: ${({ theme }) => theme.text};
`;

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

const Card = ({ type, video }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [video.userId]);

  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: 'none' }}>
      <Container type={type}>
        <CardImg type={type} src={video.imgURL} />
        <CardDetail type={type}>
          {type !== 'sm' && <Avatar src={user.img} width="36" height="36" />}
          <CardText>
            <Title>{video.title}</Title>
            <ChannelName>{user.name}</ChannelName>
            <Info>
              {video.views} views • {format(video.createdAt)}
            </Info>
            {/* <Info>100 views &dot; 18 hours ago</Info> */}
          </CardText>
        </CardDetail>
      </Container>
    </Link>
  );
};

export default Card;
