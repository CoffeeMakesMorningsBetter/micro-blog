import React, { Component } from 'react';
import MicroBlogList from './MicroBlogList'
import PostForm from './PostForm';
import Post from './Post';
import PostInformation from './PostInformation';
import CommentForm from './CommentForm';
import { findPost } from '../helper';
import { Link, Route, Switch } from 'react-router-dom';
import './MicroBlog.css';


class MicroBlog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      editTodo: false
    }
  }

  createNewPost = (post) => {
    this.setState({
      posts: [...this.state.posts, post]
    })
  }

  likePost = (id) => {
    let post = findPost(this.state.posts, id)
    post[post.length - 1].like++
    this.setState({ ...this.state, posts: [...post] })
  }

  disLikePost = (id) => {
    let post = findPost(this.state.posts, id)
    post[post.length - 1].dislike++
    this.setState({ ...this.state, posts: [...post] })
  }

  deletePost = (id) => {
    let post = findPost(this.state.posts, id)
    post.pop()
    this.setState({ ...this.state, posts: [...post] })
  }

  updatePost = (id) => {
    let post = findPost(this.state.posts, id)[0]
    return post
  }

  createNewComment = (comment, id) => {
    let post = findPost(this.state.posts, id)
    post[post.length - 1].comments.push(comment)
    this.setState({ ...this.state, posts: [...post] })
  }

  deleteComment = (commentId, postId) => {
    let post = findPost(this.state.posts, postId)
    let postComments = post[post.length - 1].comments.filter(comment => comment.id !== commentId)
    post[post.length - 1].comments = postComments
    this.setState({ ...this.state, posts: [...post] })
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
    let post = findPost(this.state.posts, id)
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
      updateP={this.updatePost}
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
            <Route exact path="/" component={props => <MicroBlogList list={this.state.posts} renderPost={this.renderPost}/>} />
            <Route exact path="/newpost" component={props => <PostForm createNewPost={this.createNewPost} edit={this.state.editTodo} {...props} />} />
            <Route exact path="/show/:id" component={this.renderPostInformation} />
            <Route exact path="/show/:id/comment" component={this.renderCommentForm} />
            <Route exact path="/show/:id/newpost" component={props => <PostForm createNewPost={this.createNewPost} {...props} />} />
          </Switch>
        </div>
      </React.Fragment>

    )
  }
}

export default MicroBlog
