import React, { Component } from "react";
import "./Blog.css";
import { Route, Link } from "react-router-dom";
import Posts from "../Blog/Posts/Posts.js";
import NewPost from "../Blog/NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blogs">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route Path="/" exact render={()=><h1>Home</h1>}></Route> */}
        <Route path="/" exact component={Posts}></Route>
        <Route path="/new-post" component={NewPost}></Route>
      </div>
    );
  }
}

export default Blog;
