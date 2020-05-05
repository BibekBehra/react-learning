import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
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
                >All Posts</NavLink>
              </li>
              <li>
                <NavLink
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
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route exact path="/new-post" component={NewPost} />
          <Route exact path="/:id"  component={Fullpost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
