import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Intro() {
  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <Box boxShadow={3} p={3} bgcolor="white" borderRadius={8}>
        <Typography variant="h4" component="h1" gutterBottom>
          논리와 코딩의 섬, Martin Island로 여러분을 초대합니다.
        </Typography>
        <Typography variant="body1" paragraph>
          지치고 따분한 코딩은 이제 그만, 논리적인 사고 단계에 기반한 코딩을 해야합니다.
        </Typography>
        <Typography variant="body2" paragraph>
          모든 프로그래밍 언어는 같은 개념을 공유하고 있다는 사실, 알고 계신가요? 그 핵심을 관통하는 개념을 공부하셔야 합니다.
        </Typography>
        <Button variant="contained" color="primary" href="/courses">
          강의 보러 가기
        </Button>
      </Box>
    </Container>
  );
}

export default Intro;
