import React, { Component } from 'react';
import MicroBlogList from './MicroBlogList'
import PostForm from './PostForm';
import Post from './Post';
import PostInformation from './PostInformation';
import CommentForm from './CommentForm';
import { findPost } from '../helper'
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './MicroBlog.css';
import { createPost, likePost, disLikePost, deletePost, createComment, delteComment } from '../actionCreators/index'


class MicroBlog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  createNewPost = (post) => {
    this.props.createPost(post)
  }

  likePost = (id) => {
    this.props.likePost(id)
  }

  disLikePost = (id) => {
    this.props.disLikePost(id)
  }

  deletePost = (id) => {
    this.props.deletePost(id)
  }

  createNewComment = (comment) => {
    this.props.createComment(comment)
  }

  deleteComment = (id) => {
    this.props.delteComment(id)
  }

  renderPost = (post) => {
    return (<Post
      key={post.id}
      id={post.id}
      post={post.post}
      like={post.like}
      dislike={post.dislike}
      title={post.title}
      likeIt={this.likePost}
      disLikeIt={this.disLikePost}
      delete={this.deletePost}
    />)
  }

  renderPostInformation = (props) => {
    const { id } = props.match.params
    let post = findPost(this.props.posts, id)
    let data = post[post.length - 1]
    return (<PostInformation
      key={data.id}
      id={data.id}
      post={data.post}
      comments={data.comments}
      like={data.like}
      dislike={data.dislike}
      title={data.title}
      likeIt={this.likePost}
      disLikeIt={this.disLikePost}
      delete={this.deletePost}
      createNewComment={this.createNewComment}
      deleteComment={this.deleteComment}
    />)
  }

  renderCommentForm = (props) => {
    const { id } = props.match.params
    return <CommentForm id={id} createNewComment={this.createNewComment} />
  }


  render() {
    return (
      <React.Fragment>
        <div>
          <nav className="nav">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/newpost">New Post</Link>
            </div>
            
          </nav>
          <Switch>
            <Route exact path="/" component={props => <MicroBlogList list={this.props.posts} renderPost={this.renderPost}/>} />
            <Route exact path="/newpost" component={props => <PostForm createNewPost={this.createNewPost} {...props} />} />
            <Route exact path="/show/:id" component={this.renderPostInformation} />
            <Route exact path="/show/:id/comment" component={this.renderCommentForm} />
          </Switch>
        </div>
      </React.Fragment>

    )
  }
}

const mapStateToProps = (reduxState) => {
  // debugger
  return {
    posts: reduxState.posts
  }
}

export default withRouter(connect(mapStateToProps, { createPost, likePost, disLikePost, deletePost, createComment, delteComment })(MicroBlog))
