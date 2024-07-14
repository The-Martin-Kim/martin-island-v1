import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import postsMeta from '../posts/postMeta.json';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
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

const BlogList = () => {
    return (
        <div className="container mt-4">
            <h1 className="mb-4" style={{fontFamily: "GowunDodum-Regular"}}>섬의 최초 개척자, Martin Kim이 들려주는 생존 비법</h1>
            <Row>
                {postsMeta.map(post => (
                    <Col md={4} key={post.id}>
                        <StyledCard>
                            <Card.Body>
                                <PostMeta style={{fontFamily: "GowunDodum-Regular"}}>
                                    <h2>{post.title}</h2>
                                    <p>By Martin Kim on {post.date}</p>
                                </PostMeta>
                                <Link to={`/blog/${post.id}`} className="btn btn-primary" style={{fontFamily: "GowunDodum-Regular"}}>읽어봅시다</Link>
                            </Card.Body>
                        </StyledCard>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default BlogList;
