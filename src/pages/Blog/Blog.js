// src/pages/Blog.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './BlogPost';

const Blog = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<BlogList />} />
                <Route path=":id" element={<BlogPost />} />
            </Routes>
        </div>
    );
};

export default Blog;
