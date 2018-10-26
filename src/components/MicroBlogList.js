import React, { Component } from 'react';

class MicroBlogList extends Component {
  render() {
    let blog = this.props.list.map(this.props.renderPost)
    return (
      <div>
        {blog}
      </div>
    )
  }
}

export default MicroBlogList