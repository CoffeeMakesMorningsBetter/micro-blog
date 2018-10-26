import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
  delete = () => {
    this.props.deleteComment(this.props.id, this.props.postId)
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