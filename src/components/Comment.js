import React, { Component } from 'react';

class Comment extends Component {
  delete = () => {
    this.props.deleteComment(this.props.id, this.props.postId)
  }
  render() {
    return (
      <div>
        <h1>{this.props.comment}</h1>
        <button onClick={this.delete}>x</button>
      </div>
    )
  }
}

export default Comment;