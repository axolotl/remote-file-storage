import { combineReducers } from 'redux'
import uuid from 'uuid'
import copyObject from '../utils/copyObject'

// what do we need?
// we need to store the state that will render the whole directory
// we also need to produce some methods for being able to update that state
// we need to:
// load contents from new folders
// add new files and new folders

// import mock state
import { mockState } from './mockState'

const updateRecursively = (id, state, changeType, changeVal = '') => {
  let newState = copyObject(state)

  const recurse = (id, dir, changeType, changeVal) => {
    dir.forEach(item => {
      if (item.id === id) {
        // apply chagne
        // change open
        // change name
        // delete
        // add item

        // tooggle open/closed
        if (changeType === 'toggleDir') {
          item.open = !item.open
          return
        }

        // change name
        else if (changeType === 'rename') {
          item.name = changeVal
          return
        }

        // add item
        else if (changeType === 'addItem') item.contents.push(changeVal)
        return
      } else if (item.type === 'folder') {
        recurse(id, item.contents, changeType, changeVal)
      }
    })
  }

  recurse(id, newState, changeType, changeVal)

  return newState
}

const deleteItem = (id, state) => {
  let newState = copyObject(state)

  const filterDelete = (id, dir) => {
    dir = dir.filter(item => item.id !== id)
    dir.forEach(item => {
      if (item.type === 'folder') {
        item.contents = filterDelete(id, item.contents)
      }
    })
    return dir
  }

  newState = filterDelete(id, newState)
  return newState
}

const addFolder = (id, name, state) => {
  let newState = copyObject(state)

  const addTo = (folder) => {
    folder.push({
      type: 'folder',
      name: name,
      id: uuid(),
      open: false,
      contents: []
    })
  }

  if (id === 'base') {
    addTo(newState)
  }

  else {
    const findID = (id, dir) => {
      dir.forEach(item => {
        if (item.id === id) {
          return item
        }
        else if (item.type === 'folder') {
          return findID(id, item.contents)
        }
      })
    }

    let dirToAddTo = findID(id, newState)

    addTo(dirToAddTo)
  }

  return newState
}

const dir = (state = mockState, action) => {
  switch (action.type) {
    case 'TOGGLE_DIR':
      return updateRecursively(action.id, state, 'toggleDir')
    case 'RENAME_ITEM':
      return updateRecursively(action.id, state, 'rename', action.newName)
    case 'DELETE_ITEM':
      return deleteItem(action.id, state)
    case 'CREATE_FOLDER':
      return addFolder(action.id, action.name, state)
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
