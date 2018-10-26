import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

class Post extends Component {
  likePost = () => {
    this.props.likeIt(this.props.id)
  }

  dislikePost = () => {
    this.props.disLikeIt(this.props.id)
  }

  deletePost = () => {
    this.props.delete(this.props.id)
  }

  render() {
    return (
      <div className="container">
        <div className="post-container">
          <div className="post-container-title">
            <p>Title: {this.props.title}</p>
            <p>like: {this.props.like}</p>
            <p>dislike: {this.props.dislike}</p>
          </div>
          <div className="post-container-content">
            <p>{this.props.post}</p>
          </div>
        </div>
        <div className="post-container-like-dislike">
          <button onClick={this.likePost}>Like</button>
          <button onClick={this.dislikePost}>Dislike</button>
          <p><Link to={`/show/${this.props.id}`}>More Details</Link></p>
        </div>
      </div>
    )
  }
}

export default Post
