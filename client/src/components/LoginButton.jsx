import Button from '@mui/material/Button';
import styledMui from '@mui/material/styles/styled';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const StyledButton = styledMui(Button)`
    border-radius:3px;
    margin: 10px 0px;
`;

export const LoginButton = () => {
  return (
    <StyledButton startIcon={<AccountCircleOutlinedIcon />} variant="outlined">
      Sign in
    </StyledButton>
  );
};
