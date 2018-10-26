export const CREATE_POST = "CREATE_POST"
export const LIKE_POST = "LIKE_POST"
export const DISLIKE_POST = "DISLIKE_POST"
export const DELETE_POST = "DELETE_POST"
export const CREATE_COMMENT = "CREATE_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"

export function createPost(blog) {
  return({
    type: CREATE_POST,
    payload: blog
  })
}

export function likePost(id) {
  return({
    type: LIKE_POST,
    payload: id
  })
}

export function disLikePost(id) {
  return({
    type: DISLIKE_POST,
    payload: id
  })
}

export function deletePost(id) {
  return({
    type: DELETE_POST,
    payload: id
  })
}

export function createComment(comment) {
  return({
    type: CREATE_COMMENT,
    payload: comment
  })
}

export function delteComment(comment) {
  return({
    type: DELETE_COMMENT,
    payload: comment
  })
}