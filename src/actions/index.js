export const updateState = newState => ({
  type: 'UPDATE_STATE',
  newState
})

export const doubleState = () => (dispatch, getState) => {
  // this action is here to test that redux-thunk is working 
  const { displayedState } = getState()
  dispatch(updateState(displayedState + displayedState))
}

export const toggleDir = id => ({
  type: 'TOGGLE_DIR',
  id
})

export const selectItem = id => ({
  type: 'SELECT_ITEM',
  id
})

export const setInputOption = option => ({
  type: 'SET_INPUT_OPTION',
  option
})