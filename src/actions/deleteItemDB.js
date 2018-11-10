import axios from 'axios'

export const populateDeleteItem = (id, belongsTo) => ({
  type: 'POPULATE_DELETE_ITEM',
  id,
  belongsTo: belongsTo === '' ? 'base' : belongsTo
})

export const deleteItemDB = (id, type, belongsTo) => dispatch => {
  // type also getting interpolated here --> maybe not good down the road?
  axios
    .delete(`/api/${type}s/${id}`)
    .then(res => dispatch(populateDeleteItem(id, belongsTo)))
    .catch(error => console.log(error))
}
