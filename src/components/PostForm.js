import React, { Component } from 'react';
import uuid4 from 'uuid4';

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: "",
      title: "",
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    let { createNewPost } = this.props
    let { title, post } = this.state
    e.preventDefault()

    createNewPost({
      id: uuid4(),
      post,
      title,
      like: 0,
      dislike: 0,
      comments: []
    })

    this.setState({ post: "", title:"" })
    this.props.history.push("/")
  }

  render() {
    let { post, title } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Title
            <input
              id="title"
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="post">
            Blog
            <input
              id="post"
              type="text"
              name="post"
              value={post}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="create" />
        </form>
      </div>
    )
  }
}

export default PostForm;