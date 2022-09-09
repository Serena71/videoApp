import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Avatar from './Avatar';
import { format } from 'timeago.js';

const Container = styled.div`
  display: flex;
  gap: 27px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentHeader = styled.div`
  margin-bottom: 10px;
`;

const User = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-right: 10px;
`;

const Date = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Text = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const Comment = ({ comment }) => {
  console.log(comment);
  const [commenUser, setCommentUser] = useState({});

  useEffect(() => {
    const getCommentUser = async () => {
      try {
        const res = await axios.get(`/users/find/${comment.userId}`);
        setCommentUser(res.data);
      } catch (err) {}
    };
    getCommentUser();
  }, [comment.userId]);

  return (
    <Container>
      <Avatar width="36" height="36" />
      <Content>
        <ContentHeader>
          <User>{commenUser.name}</User>
          <Date>{format(comment.updatedAt)}</Date>
        </ContentHeader>
        <Text>{comment.desc}</Text>
      </Content>
    </Container>
  );
};

export default Comment;
