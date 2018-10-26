import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
  delete = () => {
    this.props.deleteComment({id: this.props.id, postID: this.props.postId})
  }
  render() {
    return (
      <div className="comment-container">
        <p>{this.props.comment}</p>
        <button onClick={this.delete}>x</button>
      </div>
    )
  }
}

export default Comment;