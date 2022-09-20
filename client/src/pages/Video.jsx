import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import ButtonMui from '@mui/material/Button';
import Avatar from '../components/Avatar';
import Comments from '../components/Comments';
import Recommendation from '../components/Recommendation';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { startFetch, successfulFetch, failedFetch, videoReaction } from '../redux/videoSlice';
import { subscription } from '../redux/userSlice';
import { format } from 'timeago.js';

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

const Subscribe = styled(ButtonMui)`
  && {
    width: 90px;
    height: 40px;
    font-weight: bold;
    background-color: ${(props) => (props.$sub ? 'grey' : 'red')};
    &:hover {
      background-color: ${(props) => (props.$sub ? 'darkgrey' : 'darkred')};
    }
  }
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

const Description = styled.p`
  font-size: 14px;
`;

const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);

  const dispatch = useDispatch();

  const params = useParams();

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const getVideo = async () => {
      try {
        dispatch(startFetch);
        const videoRes = await axios.get(`/videos/find/${params.id}`);
        const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`);
        setChannel(channelRes.data);
        dispatch(successfulFetch(videoRes.data));
      } catch (err) {
        dispatch(failedFetch());
      }
    };
    getVideo();
  }, [params, dispatch]);

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(videoReaction({ reaction: 'like', user: currentUser._id }));
  };

  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(videoReaction({ reaction: 'dislike', user: currentUser._id }));
  };

  const handleSubscribe = async () => {
    if (!currentUser.subscriberedUsers.includes(channel._id)) {
      await axios.put(`/users/sub/${channel._id}`);
    } else {
      await axios.put(`/users/unsub/${channel._id}`);
    }
    dispatch(subscription(channel._id));
  };

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={currentVideo.videoUrl} controls />
        </VideoWrapper>
        <Title>{currentVideo.title}</Title>
        <Details>
          <Info>
            {currentVideo.views} views • {format(currentVideo.createdAt)}
          </Info>
          <Buttons>
            <Button onClick={handleLike}>
              {currentVideo.likes?.includes(currentUser._id) ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
              {currentVideo.likes?.length} {currentVideo.likes?.length > 1 ? 'Likes' : 'Like'}
            </Button>
            <Button onClick={handleDislike}>
              {currentVideo.dislikes?.includes(currentUser._id) ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon />}
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
            <Avatar width="50" height="50" src={channel.img} />
            <ChannelInfoContent>
              <ChannelName>{channel.name}</ChannelName>
              <ChannelCounter>{channel.subscribers} subscribers</ChannelCounter>
              <Description>{currentVideo.description}</Description>
            </ChannelInfoContent>
          </ChannelInfo>
          <Subscribe
            variant="contained"
            // use transient props ($) which prevents the props being passed to the DOM element for the boolean props
            $sub={currentUser.subscriberedUsers?.includes(channel._id)}
            onClick={handleSubscribe}
          >
            {currentUser.subscriberedUsers?.includes(channel._id) ? 'Subscibed' : 'Subscibe'}
          </Subscribe>
        </Channel>
        <Hr />
        <Comments videoId={currentVideo._id} />
      </Content>
      <Recommendation baseVideo={currentVideo} />
    </Container>
  );
};

export default Video;
