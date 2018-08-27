import axios from 'axios'

// read database //

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
      .get('/api/items/')
      .then(res => dispatch(populateInitialState(res.data)))
      .catch(error => console.log(error))
  } else {
    axios
      .get(`/api/items/${id}`)
      .then(res => dispatch(populateNestedState(id, res.data)))
      .catch(error => console.log(error))
  }
}

// add to database //

export const populateNewItem = res => ({
  type: 'POPULATE_NEW_ITEM',
  item: res
})

export const createItemDB = (name, type, belongsTo) => dispatch => {
  axios
    .post('/api/items', {
      name,
      type,
      belongsTo: belongsTo === 'base' ? '' : belongsTo
    })
    .then(res => dispatch(populateNewItem(res.data)))
    .catch(error => console.log(error))
}

// update item in database //

export const populateNewName = (id, newName, belongsTo) => ({
  type: 'POPULATE_NEW_NAME',
  id,
  newName,
  belongsTo
})

export const updateItemDB = (id, newName) => dispatch => {
  axios
    .post(`/api/items/${id}`, {
      name: newName
    })
    .then(res => dispatch(populateNewName(id, newName, res.data.belongsTo)))
    .catch(error => console.log(error))
}

// delete from database //

export const deleteItem = id => ({
  type: 'DELETE_ITEM',
  id
})

export const populateDeleteItem = id => ({
  type: 'POPULATE_DELETE_ITEM',
  id
})

export const deleteItemDB = id => dispatch => {
  axios
    .delete(`/api/items/${id}`)
    .then(res => dispatch(populateDeleteItem(id)))
    .catch(error => console.log(error))
}

// toggle folder //

export const setToggleFolder = id => ({
  type: 'TOGGLE',
  id
})

export const toggleFolder = id => (dispatch, getState) => {
  const { local } = getState()
  dispatch(setToggleFolder(id))

  if (!local[id]) {
    dispatch(readItemsDB(id))
  }
}

// select item //

export const setSelectedItem = id => ({
  type: 'SELECT_ITEM',
  id
})

export const selectItem = id => (dispatch, getState) => {
  const { selected } = getState()
  if (id !== selected) {
    dispatch(setSelectedItem(id))
  }
}

// add/remove input field //

export const addInputField = (field, selection) => ({
  type: 'ADD_INPUT_FIELD',
  field,
  selection
})

export const removeInputField = field => ({
  type: 'REMOVE_INPUT_FIELD',
  field
})
