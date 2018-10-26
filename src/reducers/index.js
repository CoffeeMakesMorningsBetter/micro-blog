import { CREATE_POST, LIKE_POST, DISLIKE_POST, DELETE_POST, CREATE_COMMENT, DELETE_COMMENT } from '../actionCreators';

const initial = {
  posts: []
}

export default function post(state = initial, action) {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, { ...action.payload }] }
    case LIKE_POST:
      let like = state.posts.findIndex(val => val.id === action.payload)
      state.posts[like].like++
      return { ...state, posts: [...state.posts] }
    case DISLIKE_POST:
      let dislike = state.posts.findIndex(val => val.id === action.payload)
      state.posts[dislike].dislike++
      return { ...state, posts: [...state.posts] }
    case DELETE_POST:
       let cleanData = state.posts.filter(val => val.id !== action.payload)
       return { ...state, posts: [...cleanData]}
    case CREATE_COMMENT:
        let newComment = state.posts.findIndex(val => val.id === action.payload.parentID)
        delete action.payload.parentID
        state.posts[newComment].comments.push(action.payload)
        return { ...state, posts: [...state.posts]}
    case DELETE_COMMENT:
        let deletedComments = state.posts.findIndex(val => val.id === action.payload.postID)
        let comments = state.posts[deletedComments].comments.findIndex(val => val.id === action.payload.id)
        state.posts[deletedComments].comments.splice(comments,1)
        return { ...state, posts: [...state.posts]}
    default:
      return state
  }
}