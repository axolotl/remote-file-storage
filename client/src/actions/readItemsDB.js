import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000'

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
      .get(`${apiUrl}/api/folders/`)
      .then(res => {
        console.log(res.data)
        dispatch(populateInitialState(res.data))
      })
      .catch(error => console.log(error))
  } else {
    axios
      .get(`${apiUrl}/api/folders/${id}`)
      .then(res => dispatch(populateNestedState(id, res.data)))
      .catch(error => console.log(error))
  }
}
