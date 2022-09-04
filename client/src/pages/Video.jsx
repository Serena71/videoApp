import React from 'react';
import styled from 'styled-components';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import ButtonMui from '@mui/material/Button';
import styledMui from '@mui/material/styles/styled';
import Avatar from '../components/Avatar';
import Comments from '../components/Comments';

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 25px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Subscribe = styledMui(ButtonMui)`
  width: 90px;
  height: 40px;
  font-weight:bold;
  background-color:red;
  &:hover { background-color:darkred; }
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
  width: 80%;
`;

const ChannelInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  width: fit-content;
`;

const ChannelName = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;
const ChannelCounter = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
  margin-bottom: 20px;
`;

const ChannelDescription = styled.p`
  font-size: 14px;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="750"
            src="https://www.youtube.com/embed/RkWpJ4XUHuw"
            title="YouTube video player"
            frameBorder="8"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style={{ border: 'none' }}
          ></iframe>
        </VideoWrapper>
        <Title>This Video</Title>
        <Details>
          <Info>INFO</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon />
              Like
            </Button>
            <Button>
              <ThumbDownOutlinedIcon />
              Dislike
            </Button>
            <Button>
              <ShareOutlinedIcon />
              Share
            </Button>
            <Button>
              <PlaylistAddOutlinedIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Avatar width="50" height="50" />
            <ChannelInfoContent>
              <ChannelName>Channel Name</ChannelName>
              <ChannelCounter>123 subscribers</ChannelCounter>
              <ChannelDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, culpa rerum eos unde iusto est
                temporibus nobis laudantium vel nam ut facilis voluptas laboriosam alias laborum vitae cumque, officia
                explicabo? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati recusandae blanditiis
                fuga rerum, asperiores a at voluptatum accusantium, repudiandae doloribus ex, aut accusamus quia
                exercitationem ducimus! Veniam dolore praesentium quas.
              </ChannelDescription>
            </ChannelInfoContent>
          </ChannelInfo>
          <Subscribe variant="contained">Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation></Recommendation>
    </Container>
  );
};

export default Video;
