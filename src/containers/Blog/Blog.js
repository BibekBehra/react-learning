import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import axios from "../../axios.js";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId:null,
  };
  componentDidMount() {
    axios.get('/posts').then((response) => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => {
        return {
          ...post,
          Author: "Bibek",
        };
      });
      this.setState({ posts: updatedPosts });
    });
  }
  postClickHandler = (id) => {
    this.setState({ selectedPostId: id });
  };
  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.Author}
          clicked={() => this.postClickHandler(post.id)}
        ></Post>
      );
    });
    
    return (
      <div className="Blogs">
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">New Post</a></li>
            </ul>
            </nav>
        </header>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId}/>
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
