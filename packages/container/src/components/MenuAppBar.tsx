import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link
            to={'/'}
            style={{
              color: 'inherit',
              textDecoration: 'none',
              fontSize: 'inherit',
              marginRight: '10px'
            }}
          >
            <HomeIcon />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Container
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
            }}
          >
            {auth ? (
              <Link
                to={'/myaccount'}
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  fontSize: 'inherit',
                }}
              >
                myAccount
              </Link>
            ) : (
              <>
                <Link
                  to={'/signup'}
                  style={{
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize: 'inherit',
                  }}
                >
                  회원가입
                </Link>
                <Link
                  to={'/signin'}
                  style={{
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize: 'inherit',
                  }}
                >
                  로그인
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
