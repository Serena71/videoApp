import MuiAvatar from '@mui/material/Avatar';
import styled from 'styled-components';

const Avatar = styled(MuiAvatar)`
  && {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
  }
`;

export default Avatar;
