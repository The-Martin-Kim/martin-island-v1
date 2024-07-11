import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#00796b',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '2rem',
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
          borderRadius: '12px',
          padding: '3rem',
          backgroundColor: '#fff',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h4: {
          fontWeight: 700,
        },
        body1: {
          marginBottom: '1.5rem',
        },
        body2: {
          marginBottom: '1rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '0.5rem 2rem',
          borderRadius: '8px',
        },
      },
    },
  },
});

function Intro() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              이 곳은 논리와 코딩의 섬, Martin Island입니다.
            </Typography>
            <Typography variant="body1">
              지치고 따분한 코딩은 이제 그만, 논리적인 사고 단계에 기반한 코딩을 해야합니다.
            </Typography>
            <Typography variant="body2">
              모든 프로그래밍 언어는 같은 개념을 공유하고 있다는 사실, 알고 계신가요? 그 핵심을 관통하는 개념을 공부하셔야 합니다.
            </Typography>
            <Button variant="contained" color="primary" href="/courses">
              강의 보러 가기
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
  );
}

export default Intro;
