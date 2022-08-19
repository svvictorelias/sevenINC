import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';
import LogoSeven from '../../assets/images/logoSeven.png';

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <img src={LogoSeven} style={{ width: '12rem' }} />
        <Typography variant="h6">
          <Link
            sx={{ textDecoration: 'none', color: 'white' }}
            target="_blank"
            href="https://www.linkedin.com/in/svvictorelias/"
          >
            Teste Técnico - Victor Elias
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
