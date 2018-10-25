import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <div>
        <h1>Title: {this.props.title}</h1>
        <div>{this.props.post}</div>
        <div>
          <p>like: {this.props.like}</p>
          <p>dislike: {this.props.dislike}</p>
        </div>
        <button onClick={this.likePost}>Like</button>
        <button onClick={this.dislikePost}>Dislike</button>
        <button onClick={this.deletePost}>Delete</button>
        <p><Link to={`/show/${this.props.id}`}>More Details</Link></p>
      </div>
    )
  }
}

export default Post
