import axios from 'axios'

export const readItemsDB = (id) => dispatch => {
  if (!id) {
    axios.get('/api/items/')
      .then(res => dispatch(populateInitialState(res)))
      .catch(error => console.log(error))
  } else {
    axios
    .get(`/api/items/${id}`)
    .then(res => dispatch(populateNestedState(res)))
    .catch(error => console.log(error))
  }
}

export const createItemDB = (name, type, belongsTo, location) => dispatch => {
  axios
    .post('/api/items', {
      name,
      type,
      belongsTo,
      location
    })
    .then(res => dispatch(populateNewItem(res.id, res.type, res.belongsTo)))
    .catch(error => console.log(error))
}

export const updateItemDB = (id, newName) => dispatch => {
  axios
    .post(`/api/items/${id}`, {
      name: newName
    })
    .then(res => dispatch(populateNewName(id, newName)))
    .catch(error => console.log(error))
}

export const deleteItemDB = id => dispatch => {
  axios
    .delete(`/api/items/${id}`)
    .then(res => dispatch(populateDeleteItem(id)))
    .catch(error => console.log(error))
}

export const populateInitialState = (state) => {
  type: 'POPULATE_INITIAL_STATE',
  state
}

export const populateNestedState = (state) => {
  type: 'POPULATE_NESTED_STATE',
  state
}

export const populateNewItem = (id, type, belongsTo) => {
  type: 'POPULATE_NEW_ITEM',
  id,
  type,
  belongsTo
}

export const populateNewName = (id, newName) => {
  type: 'POPULATE_NEW_NAME',
  id,
  newName
}

export const populateDeleteItem = (id) => {
  type: 'POPULATE_DELETE_ITEM',
  id
}

// ------------------------------------------------ //

export const toggleDir = id => ({
  type: 'TOGGLE_DIR',
  id
})

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

export const addInputField = (field, selection) => ({
  type: 'ADD_INPUT_FIELD',
  field,
  selection
})

export const removeInputField = field => ({
  type: 'REMOVE_INPUT_FIELD',
  field
})

export const renameItem = (id, newName) => ({
  type: 'RENAME_ITEM',
  id,
  newName
})

export const deleteItem = id => ({
  type: 'DELETE_ITEM',
  id
})

export const createFolder = (id, name) => ({
  type: 'CREATE_FOLDER',
  id,
  name
})
