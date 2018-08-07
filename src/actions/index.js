export const updateState = newState => ({
  type: 'UPDATE_STATE',
  newState
})

export const doubleState = () => (dispatch, getState) => {
  // this action is here to test that redux-thunk is working 
  const { displayedState } = getState()
  dispatch(updateState(displayedState + displayedState))
}
