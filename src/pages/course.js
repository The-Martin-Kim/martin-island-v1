import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, List, ListItem, ListItemText, Box, Collapse } from '@mui/material';

const courses = [
    {
        title: '첫만남은 Python대로 되지 않아 ',
        topics: [
            'Python 1주차',
            'Python 1주차',
            'Python 1주차',
            'Python 1주차',
            'Python 1주차',
            'Python 1주차',
        ]
    },
    {
        title: '만남은 C고 이별은 어려워',
        topics: [
            'C 1주차',
            'C 1주차',
            'C 1주차',
            'C 1주차',
            'C 1주차',
        ]
    },
    {
        title: '나 JAVA봐라 ~',
        topics: [
            'JAVA 1주차',
            'JAVA 1주차',
            'JAVA 1주차',
            'JAVA 1주차',
            'JAVA 1주차',
        ]
    }
];

function Course() {
    const [expanded, setExpanded] = useState(null);

    const handleExpandClick = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '2rem' }}>
            <Typography variant="h4" component="h1" gutterBottom style={{ textAlign: 'center', marginBottom: '2rem' }}>
                수업 과정 안내
            </Typography>
            {courses.map((course, index) => (
                <Box key={index} mb={2}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" onClick={() => handleExpandClick(index)} style={{ cursor: 'pointer', userSelect: 'none' }}>
                                {course.title}
                            </Typography>
                            <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                                <List>
                                    {course.topics.map((topic, idx) => (
                                        <ListItem key={idx}>
                                            <ListItemText primary={topic} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        </CardContent>
                    </Card>
                </Box>
            ))}
        </Container>
    );
}

export default Course;
