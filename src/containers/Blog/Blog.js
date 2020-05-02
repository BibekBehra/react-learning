import React, { Component } from "react";
import "./Blog.css";
import Posts from '../Blog/Posts/Posts.js'
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
                <a href="/">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
       <Posts/>
      </div>
    );
  }
}

export default Blog;
