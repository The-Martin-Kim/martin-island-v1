// src/pages/BlogPost.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Container, Button } from 'react-bootstrap';

const BlogPost = () => {
    const { id } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        import(`../posts/post${id}.md`)
            .then(res => fetch(res.default))
            .then(res => res.text())
            .then(text => setContent(text))
            .catch(err => setContent('Post not found'));
    }, [id]);

    return (
        <Container className="mt-4">
            {content === 'Post not found' ? (
                <div>
                    <h1>Post not found</h1>
                    <Link to="/blog">
                        <Button variant="primary">Back to Blog</Button>
                    </Link>
                </div>
            ) : (
                <div>
                    <ReactMarkdown>{content}</ReactMarkdown>
                    <Link to="/blog">
                        <Button variant="primary">Back to Blog</Button>
                    </Link>
                </div>
            )}
        </Container>
    );
};

export default BlogPost;
