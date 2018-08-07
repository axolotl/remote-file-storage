import { combineReducers } from 'redux'

const displayedState = (state = 'initial state', action) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      return action.newState
    default:
      return state
  }
}

const AppState = combineReducers({
  displayedState
})

export default AppState
