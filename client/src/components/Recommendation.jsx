import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import axios from 'axios';

const Contaner = styled.div`
  flex: 2;
`;

const Recommendation = ({ baseVideo }) => {
  const [recommendations, setRecommendations] = useState([]);
  // console.log(tags);
  const tags = baseVideo.tags.join(',');

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/tags`, { params: { tags: tags } });
      setRecommendations(res.data);
    };
    fetchVideos();
  }, [tags]);
  return (
    <Contaner>
      {recommendations.map((recommendation) => (
        <Card key={recommendation._id} type="sm" video={recommendation} />
      ))}
    </Contaner>
  );
};

export default Recommendation;
