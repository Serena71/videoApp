import styledMui from '@mui/material/styles/styled';
import AvatarMui from '@mui/material/Avatar';
import React from 'react';

const Avatar = ({ width, height, src }) => {
  //   const width = width;
  //   const height = height;
  const AvatarStyled = styledMui(AvatarMui)`
    width: ${width}px;
    height: ${height}px;
    `;

  return <AvatarStyled src={src} />;
};

export default Avatar;
