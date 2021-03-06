import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Comment from './Comment'
import './Post.css'

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

  updatePost = () => {
    this.props.updateP(this.props.id)
    this.props.history.push(`/show/${this.props.id}/newPost`)
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
      <div className="container">
        <div className="post-container">
          <div className="post-container-title">
            <p>Title: {this.props.title}</p>
            <p>like: {this.props.like}</p>
            <p>dislike: {this.props.dislike}</p>
          </div>
          <div className="post-container-content">
            <p>{this.props.post}</p>
            <div className="post-container-content-comments">
              {comments}
            </div>
          </div>
        </div>
        <div className="post-container-like-dislike">
          <button onClick={this.likePost}>Like</button>
          <button onClick={this.dislikePost}>Dislike</button>
          <button onClick={this.deletePost}>Delete</button>
          <button onClick={this.updatePost}>Update Post</button>
          <p><Link to={`/show/${this.props.id}/comment`}>Add Comment</Link></p>
        </div>
      </div>
    )
  }
}


export default withRouter(PostInformation)