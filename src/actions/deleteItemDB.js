import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000'

export const populateDeleteItem = (id, belongsTo) => ({
  type: 'POPULATE_DELETE_ITEM',
  id,
  belongsTo: belongsTo === '' ? 'base' : belongsTo
})

export const deleteItemDB = (id, type, belongsTo) => dispatch => {
  // type also getting interpolated here --> maybe not good down the road?
  axios
    .delete(`${apiUrl}/api/${type}s/${id}`)
    .then(res => dispatch(populateDeleteItem(id, belongsTo)))
    .catch(error => console.log(error))
}
