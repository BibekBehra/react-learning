import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
    error:false
  };
  deleteHandler = () => {
    axios
      .get("/posts/" + this.props.match.params.id)
      .then((response) => {
        console.log(response);
      });
  };
  componentDidMount() {
    if (
      (this.props.match.params.id && !this.state.loadedPost && !this.state.error) ||
      (this.state.loadedPost && this.props.match.params.id !== this.state.loadedPost.id)
    ) {
      axios
        .get('/posts/' + this.props.match.params.id)
        .then((response) => {
          const updatedPosts = response.data;
          this.setState({ loadedPost: updatedPosts });
        }).catch(error=>{
          this.setState({error:true})
        });;
    }
  }
  render(props) {
    debugger;
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading !</p>;
    }
    if(this.state.error){
      post = <p style={{ textAlign: "center" }}>something went wrong!</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deleteHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
