import React, { Component } from "react";
import axios from "../../../axios.js";
import Post from "../../../components/Post/Post.js";
import classes from "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  };
  componentDidMount() {
    axios.get("/posts").then((response) => {
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
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;