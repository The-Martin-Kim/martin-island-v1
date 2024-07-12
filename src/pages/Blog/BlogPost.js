import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Container, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import postsMeta from '../posts/postMeta.json';

const StyledContainer = styled(Container)`
    margin-top: 20px;
`;

const StyledCard = styled(Card)`
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const MarkdownContent = styled.div`
    h1, h2, h3, h4, h5, h6 {
        margin-top: 20px;
        margin-bottom: 10px;
        text-align: left;
    }

    p {
        line-height: 1.6;
        margin-bottom: 20px;
        text-align: left;
    }

    a {
        color: #007bff;
        text-decoration: none;
        text-align: left;
        &:hover {
            text-decoration: underline;
        }
    }

    ul, ol {
        margin-left: 20px;
        margin-bottom: 20px;
        text-align: left;
    }

    blockquote {
        margin: 20px 0;
        padding: 10px 20px;
        background-color: #f9f9f9;
        border-left: 5px solid #ccc;
        text-align: left;
    }

    pre {
        background-color: #f1f1f1;
        padding: 10px;
        border-radius: 5px;
        overflow-x: auto;
        text-align: left;
    }

    code {
        background-color: #f1f1f1;
        padding: 2px 4px;
        border-radius: 3px;
        text-align: left;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
        text-align: left;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
    }
`;

const PostMeta = styled.div`
    margin-bottom: 20px;
    text-align: left;

    h2 {
        margin: 0;
    }

    p {
        margin: 0;
        color: #666;
    }
`;

const BlogPost = () => {
    const { id } = useParams();
    const [content, setContent] = useState('');
    const postMeta = postsMeta.find(post => post.id === parseInt(id));

    useEffect(() => {
        import(`../posts/post${id}.md`)
            .then(res => fetch(res.default))
            .then(res => res.text())
            .then(text => setContent(text))
            .catch(err => setContent('Post not found'));
    }, [id]);

    return (
        <StyledContainer>
            {content === 'Post not found' ? (
                <div>
                    <h1 style={{textAlign: "center"}}>아마 그런 글은 없을껄요?</h1>
                    <br/>
                    <Link to="/blog">
                    <Button variant="primary">목록으로 돌아가기</Button>
                    </Link>
                </div>
            ) : (
                <StyledCard>
                    <Card.Body>
                        {postMeta && (
                            <PostMeta>
                                <h2>{postMeta.title}</h2>
                                <p>By Martin Kim on {postMeta.date}</p>
                                <hr/>
                            </PostMeta>
                        )}
                        <MarkdownContent>
                            <ReactMarkdown>{content}</ReactMarkdown>
                        </MarkdownContent>
                        <Link to="/blog">
                            <Button variant="primary">목록으로 돌아가기</Button>
                        </Link>
                    </Card.Body>
                </StyledCard>
            )}
        </StyledContainer>
    );
};

export default BlogPost;
