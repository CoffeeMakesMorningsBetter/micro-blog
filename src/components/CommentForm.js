import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import uuid4 from 'uuid4'


class CommentForm extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      comment: ""
    }   
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.createNewComment({id: uuid4(), comment: this.state.comment, parentID: this.props.id})
    this.props.history.push('/')
  }

  render() {
    let { comment } = this.state
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add A Comment
            <input
              type="text"
              name="comment"
              value={comment}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Post a comment"/>
        </form>
      </div>
    )
  }
}

export default withRouter(CommentForm);
