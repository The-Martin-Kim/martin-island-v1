import React from 'react';
import { Container, TextField, Button, Typography, Box, Grid } from '@mui/material';

function ContactUs() {
    return (
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
            <Box boxShadow={3} p={3} bgcolor="white" borderRadius={8} textAlign="center">
                <Typography variant="h4" component="h1" gutterBottom>
                    상담하기
                </Typography>
                <Typography variant="body1" paragraph>
                    편하게 상담을 받아보세요.
                </Typography>
                <form noValidate autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Name"
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                required
                                type="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Message"
                                variant="outlined"
                                required
                                multiline
                                rows={4}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
}

export default ContactUs;
