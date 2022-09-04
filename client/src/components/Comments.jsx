import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import Comment from './Comment';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
  margin-bottom: 15px;
`;

const CommentSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 20px 0;
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  padding: 5px 0;
  outline: none;
  caret-color: ${({ theme }) => theme.text};
  &:focus {
    transition: linear 0.5s;
    border-bottom: 1px solid ${({ theme }) => theme.text};
  }
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar width="36" height="36" />
        <Input placeholder="  leave your comment..." />
      </NewComment>
      <CommentSections>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </CommentSections>
    </Container>
  );
};

export default Comments;
