import { combineReducers } from 'redux'
import copyObject from '../utils/copyObject'

// what do we need?
// we need to store the state that will render the whole directory
// we also need to produce some methods for being able to update that state
// we need to:
// load contents from new folders
// add new files and new folders

// import mock state
import { mockState } from './mockState'

const toggleDir = (id, state) => {
  let newState = copyObject(state)

  const toggleRecursively = (id, folder) => {
    folder.forEach((item, i) => {
      if (item.id === id) {
        item.open = !item.open
      }

      if (item.type === 'folder') {
        toggleRecursively(id, item.contents)
      }
    })
  }

  toggleRecursively(id, newState)

  return newState
}

const dir = (state = mockState, action) => {
  switch (action.type) {
    case 'TOGGLE_DIR':
      return toggleDir(action.id, state)
    default:
      return state
  }
}

const selected = (state = '', action) => {
  switch (action.type) {
    case 'SELECT_ITEM':
      return action.id
    default:
      return state
  }
}

const inputFields = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_INPUT_FIELD':
      return { ...state, [action.field]: action.selection }
    case 'REMOVE_INPUT_FIELD':
      return { ...state, [action.field]: false }
    default:
      return state
  }
}

const AppState = combineReducers({
  dir,
  selected,
  inputFields
})

export default AppState
