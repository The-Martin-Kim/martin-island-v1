import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Grid, FormControl, FormHelperText } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
    },
});

function ContactUs() {
    const [formValues, setFormValues] = useState({
        name: '',
        grade: '',
        department: '',
        email: '',
        phone: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        grade: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

        // Basic validation (you can extend this based on your requirements)
        switch (name) {
            case 'name':
                setFormErrors({ ...formErrors, name: value ? '' : '이름을 입력해주세요.' });
                break;
            case 'grade':
                setFormErrors({ ...formErrors, grade: value ? '' : '학년을 입력해주세요.' });
                break;
            case 'email':
                setFormErrors({ ...formErrors, email: value.includes('@') ? '' : '유효한 이메일 주소를 입력해주세요.' });
                break;
            case 'phone':
                const phoneRegex = /^010-\d{4}-\d{4}$/;
                setFormErrors({ ...formErrors, phone: phoneRegex.test(value) ? '' : '전화번호를 010-XXXX-XXXX 형식으로 입력해주세요.' });
                break;
            case 'message':
                setFormErrors({ ...formErrors, message: value ? '' : '메시지를 입력해주세요.' });
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.error('현재는 이용할 수 없는 서비스입니다. 불편을 드려 죄송합니다.');
    };

    return (
        <ThemeProvider theme={theme}>
            <ToastContainer />
            <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
                <Box boxShadow={3} p={3} bgcolor="white" borderRadius={8} textAlign="center">
                    <Typography variant="h4" component="h1" gutterBottom style={{ fontFamily: "GowunDodum-Regular" }}>
                        Martin Kim's Post Office 📮
                    </Typography>
                    <Typography variant="body1" paragraph style={{ fontFamily: "GowunDodum-Regular" }}>
                        궁금한 점을 적어 메일을 보내보세요.
                        <br />
                        전화 상담이 필요한 경우, 빠른 시일 내에 연락드리겠습니다.
                    </Typography>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl fullWidth error={!!formErrors.name}>
                                    <TextField
                                        fullWidth
                                        label="이름"
                                        variant="outlined"
                                        required
                                        name="name"
                                        value={formValues.name}
                                        onChange={handleChange}
                                        InputLabelProps={{ style: { fontFamily: "GowunDodum-Regular" } }}
                                        InputProps={{ style: { fontFamily: "GowunDodum-Regular" } }}
                                    />
                                    {formErrors.name && (
                                        <FormHelperText style={{ fontFamily: "GowunDodum-Regular" }}>
                                            {formErrors.name}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth error={!!formErrors.grade}>
                                    <TextField
                                        fullWidth
                                        label="학년 (성인일 경우 성인으로 기재)"
                                        variant="outlined"
                                        required
                                        name="grade"
                                        value={formValues.grade}
                                        onChange={handleChange}
                                        InputLabelProps={{ style: { fontFamily: "GowunDodum-Regular" } }}
                                        InputProps={{ style: { fontFamily: "GowunDodum-Regular" } }}
                                    />
                                    {formErrors.grade && (
                                        <FormHelperText style={{ fontFamily: "GowunDodum-Regular" }}>
                                            {formErrors.grade}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <TextField
                                        fullWidth
                                        label="학과 (대학생 및 성인만 기재해주세요.)"
                                        variant="outlined"
                                        name="department"
                                        value={formValues.department}
                                        onChange={handleChange}
                                        InputLabelProps={{ style: { fontFamily: "GowunDodum-Regular" } }}
                                        InputProps={{ style: { fontFamily: "GowunDodum-Regular" } }}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth error={!!formErrors.email}>
                                    <TextField
                                        fullWidth
                                        label="이메일"
                                        variant="outlined"
                                        required
                                        type="email"
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        InputLabelProps={{ style: { fontFamily: "GowunDodum-Regular" } }}
                                        InputProps={{ style: { fontFamily: "GowunDodum-Regular" } }}
                                    />
                                    {formErrors.email && (
                                        <FormHelperText style={{ fontFamily: "GowunDodum-Regular" }}>
                                            {formErrors.email}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth error={!!formErrors.phone}>
                                    <TextField
                                        fullWidth
                                        label="전화번호"
                                        variant="outlined"
                                        required
                                        name="phone"
                                        value={formValues.phone}
                                        onChange={handleChange}
                                        InputLabelProps={{ style: { fontFamily: "GowunDodum-Regular" } }}
                                        InputProps={{ style: { fontFamily: "GowunDodum-Regular" } }}
                                    />
                                    {formErrors.phone && (
                                        <FormHelperText style={{ fontFamily: "GowunDodum-Regular" }}>
                                            {formErrors.phone}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth error={!!formErrors.message}>
                                    <TextField
                                        fullWidth
                                        label="Message"
                                        variant="outlined"
                                        required
                                        multiline
                                        rows={4}
                                        name="message"
                                        value={formValues.message}
                                        onChange={handleChange}
                                        InputLabelProps={{ style: { fontFamily: "GowunDodum-Regular" } }}
                                        InputProps={{ style: { fontFamily: "GowunDodum-Regular" } }}
                                    />
                                    {formErrors.message && (
                                        <FormHelperText style={{ fontFamily: "GowunDodum-Regular" }}>
                                            {formErrors.message}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    style={{ backgroundColor: 'grey', fontFamily: "GowunDodum-Regular" }}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default ContactUs;
