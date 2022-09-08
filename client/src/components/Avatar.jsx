import AvatarMui from '@mui/material/Avatar';
import React from 'react';
import styled from 'styled-components';

const Avatar = styled(AvatarMui).attrs((props) => ({
  width: props.width,
  height: props.height,
}))`
  && {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
  }
`;

export default Avatar;
