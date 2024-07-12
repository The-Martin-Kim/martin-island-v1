import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, List, ListItem, ListItemText, Box, Collapse } from '@mui/material';

function Course({ course }) {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '2rem' }}>
            <Typography variant="h4" component="h1" gutterBottom style={{ textAlign: 'center', marginBottom: '2rem' }}>
                {course.title}
            </Typography>
            <Box mb={2}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" onClick={handleExpandClick} style={{ cursor: 'pointer', userSelect: 'none' }}>
                            {course.title}
                        </Typography>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
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
        </Container>
    );
}

export default Course;
