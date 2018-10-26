import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Comment from './Comment'

class PostInformation extends Component {
  likePost = () => {
    this.props.likeIt(this.props.id)
  }

  dislikePost = () => {
    this.props.disLikeIt(this.props.id)
  }

  deletePost = () => {
    this.props.delete(this.props.id)
    this.props.history.push("/")
  }

  createComments = (comment) => {
    return (
      <Comment
        key={comment.id}
        id={comment.id}
        deleteComment={this.props.deleteComment}
        postId={this.props.id}
        comment={comment.comment}
      />
    )
  }

  render() {
    let comments = this.props.comments.map(this.createComments)
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>{this.props.post}</div>
        <div>
          <p>like: {this.props.like}</p>
          <p>dislike: {this.props.dislike}</p>
        </div>
        <button onClick={this.likePost}>Like</button>
        <button onClick={this.dislikePost}>Dislike</button>
        <button onClick={this.deletePost}>Delete</button>
        <p><Link to={`/show/${this.props.id}/comment`}>Add Comment</Link></p>
        <div>
          {comments}
        </div>
      </div>
    )
  }
}


export default withRouter(PostInformation)