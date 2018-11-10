import axios from 'axios'

export const populateInitialState = state => ({
  type: 'POPULATE_INITIAL_STATE',
  state
})

export const populateNestedState = (belongsTo, state) => ({
  type: 'POPULATE_NESTED_STATE',
  belongsTo,
  state
})

export const readItemsDB = id => dispatch => {
  if (!id) {
    axios
      .get('/api/folders/')
      .then(res => dispatch(populateInitialState(res.data)))
      .catch(error => console.log(error))
  } else {
    axios
      .get(`/api/folders/${id}`)
      .then(res => dispatch(populateNestedState(id, res.data)))
      .catch(error => console.log(error))
  }
}
