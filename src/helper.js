function findPost(arr, id) {
  let find = arr.filter(val => val.id === id)[0]
  let other = arr.filter(val => val.id !== id)
  return [...other, find]
}

export {
  findPost
}