import axios from 'axios'

export const populateNewItem = res => ({
  type: 'POPULATE_NEW_ITEM',
  item: res
})

// !!! for folders only --> files have their own route with formdata handling
export const createItemDB = (name, type, belongsTo) => dispatch => {
  // need to change name
  axios
    .post('/api/folders/', {
      name,
      type,
      belongsTo: belongsTo === 'base' ? '' : belongsTo
    })
    .then(res => dispatch(populateNewItem(res.data)))
    .catch(error => console.log(error))
}
