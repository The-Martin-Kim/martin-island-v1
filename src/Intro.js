import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { Button, Container, Typography, Box } from '@mui/material';

function Intro() {
    return (
        <>
            <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
                <Typography variant="h4"  gutterBottom style={{fontFamily: "GowunDodum-Regular"}}>
                    <strong>논리와 코딩의 섬, Martin Island로 여러분을 초대합니다.</strong>
                </Typography>
                <Button
                    variant="contained"
                    color="success"
                    href={"/courses"}
                    style={{ marginTop: '5px', padding: '8px 15px', fontSize: '18px', fontFamily: "GowunDodum-Regular" }}
                >
                    탐험하러 가기
                </Button>
            </Container>
            <div><br/><br/><br/></div>
            <Box
                className='text-center p-3'
                style={{fontFamily: "GowunDodum-Regular"}}
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    position: 'fixed',
                    bottom: 0,
                    width: '100%'
                }}
            >
                2024 &copy; Martin Island. All Rights Reserved.
            </Box>
        </>
    );
}

export default Intro;
