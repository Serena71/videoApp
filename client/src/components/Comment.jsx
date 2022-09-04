import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

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

const Comment = () => {
  return (
    <Container>
      <Avatar width="36" height="36" />
      <Content>
        <ContentHeader>
          <User>Serena Zhang</User>
          <Date>1 hour ago</Date>
        </ContentHeader>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, a omnis? Harum neque obcaecati sit quo
          explicabo enim, nemo quas eos veniam, quisquam tempora id cupiditate, accusantium qui nam ut.
        </Text>
      </Content>
    </Container>
  );
};

export default Comment;
