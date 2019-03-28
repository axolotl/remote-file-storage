import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000'

export const populateNewName = (id, newName, belongsTo) => ({
  type: 'POPULATE_NEW_NAME',
  id,
  newName,
  belongsTo: belongsTo === '' ? 'base' : belongsTo
})

export const updateItemDB = (id, type, newName) => dispatch => {
  // type will be interpolated as either (file)s or (folers)s
  // and get sent to the appropriate api route
  axios
    .put(`${apiUrl}/api/${type}s/${id}`, {
      name: newName
    })
    .then(res => dispatch(populateNewName(id, newName, res.data.belongsTo)))
    .catch(error => console.log(error))
}
