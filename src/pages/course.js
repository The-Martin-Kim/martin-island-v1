import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, List, ListItem, ListItemText, Box, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Course({ course }) {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '2rem' }}>
            <Typography variant="h4" component="h1" gutterBottom style={{ textAlign: 'center', marginBottom: '2rem', fontFamily: "GowunDodum-Regular" }}>
                {course.title}
            </Typography>
            <Box mb={2}>
                <Card elevation={6} sx={{ borderRadius: '16px', backgroundColor: '#EAD9F7' }}>
                    <CardContent>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                            <Typography variant="h5" onClick={handleExpandClick} style={{ cursor: 'pointer', userSelect: 'none', flexGrow: 1, fontFamily: "GowunDodum-Regular" }}>
                                {course.title}
                            </Typography>
                            <IconButton onClick={handleExpandClick}>
                                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            </IconButton>
                        </Box>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <List>
                                {course.topics.map((topic, idx) => (
                                    <ListItem key={idx} >
                                        <ListItemText primary={topic} primaryTypographyProps={{ style: { fontFamily: 'GowunDodum-Regular' } }} />
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
