import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const coursesOverview = [
    { title: 'Python', link: '/courses/python' },
    { title: 'C언어 기초', link: '/courses/c1' },
    { title: 'C언어 심화', link: '/courses/c2' },
    { title: '데이터 분석', link: '/courses/data_science' },
    { title: '머신러닝', link: '/courses/machine_learning' },
    { title: 'Java', link: '/courses/java' },
    { title: 'HTML', link: '/courses/html' }
];

function CourseOverview() {
    return (
        <Container maxWidth="md" style={{ marginTop: '2rem' }}>
            <Typography variant="h4" component="h1" gutterBottom style={{ textAlign: 'center', marginBottom: '2rem', fontFamily: "GowunDodum-Regular"}}>
                섬에서 살아남기 위한 생존 기술
            </Typography>
            <Grid container spacing={4}>
                {coursesOverview.map((course, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Link to={course.link} style={{ textDecoration: 'none' }}>
                            <Paper elevation={6} style={{ padding: '1rem', textAlign: 'center' }}>
                                <Typography variant="h6" component="h2" style={{ color: 'inherit', fontFamily: "GowunDodum-Regular" }}>
                                    {course.title}
                                </Typography>
                            </Paper>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default CourseOverview;
