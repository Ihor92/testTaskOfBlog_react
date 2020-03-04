import React from 'react';
import './AppWrap.css';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostPage from '../PostPage/PostPage';
import { AddPostBlog as AddBlog } from '../AddPostBlog/AddPostBlog';


export function AppWrap() {
  return (
    <Router>
      <Header />
      <div className="app-wrap">
        <Route path="/" component={ MainPage } exact />
        <Route path="/post-page" component={ PostPage } />
        <Route path="/add-post-blog" component={ AddBlog } />
      </div>
    </Router>
  )
}