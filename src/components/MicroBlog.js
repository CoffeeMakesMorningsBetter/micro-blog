import React, { Component } from 'react';
import MicroBlogList from './MicroBlogList'
import PostForm from './PostForm';
import Post from './Post';
import PostInformation from './PostInformation';
import CommentForm from './CommentForm';
import { findPost } from '../helper';
import { Link, Route, Switch } from 'react-router-dom';


class MicroBlog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
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

  createNewComment = (comment, id) => {
    let post = findPost(this.state.posts, id)
    post[post.length - 1].comments.push(comment)
    this.setState({ ...this.state, posts: [...post] })
  }

  renderPost = (post) => {
    return (<Post
      key={post.id}
      id={post.id}
      post={post.post}
      comments={post.comments}
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
    console.log(data)
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
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/newpost">New Post</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={props => <MicroBlogList list={this.state.posts} renderPost={this.renderPost}/>} />
            <Route exact path="/newpost" component={props => <PostForm createNewPost={this.createNewPost} {...props} />} />
            <Route exact path="/show/:id" component={this.renderPostInformation} />
            <Route exact path="/show/:id/comment" component={this.renderCommentForm} />
          </Switch>
        </div>
      </React.Fragment>

    )
  }
}

export default MicroBlog
