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
