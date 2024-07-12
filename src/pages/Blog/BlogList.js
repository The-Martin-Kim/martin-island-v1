// src/pages/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

const posts = [
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' },
    { id: 3, title: 'Third Post' },
];

const BlogList = () => {
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Blog Posts</h1>
            <Row>
                {posts.map(post => (
                    <Col md={4} key={post.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Link to={`/blog/${post.id}`} className="btn btn-primary">Read More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default BlogList;
