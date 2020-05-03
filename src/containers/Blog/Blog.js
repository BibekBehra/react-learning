import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import Fullpost from '../Blog/FullPost/FullPost.js';
class Blog extends Component {
  render() {
    return (
      <div className="Blogs">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/"
                exact
                 >Home</NavLink>
              </li>
              <li>
                <NavLink
                activeClassName="my-active"
                  to={{
                    pathname: '/new-post',
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/:id" component={Fullpost} />
      </div>
    );
  }
}

export default Blog;
