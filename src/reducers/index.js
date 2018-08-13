import { combineReducers } from 'redux'
import uuid from 'uuid'

// what do we need? 
// we need to store the state that will render the whole directory
// we also need to produce some methods for being able to update that state
// we need to:
// load contents from new folders
// add new files and new folders

const mockState = [
  {
    type: 'file',
    name: 'test',
    id: uuid()
  },
  {
    type: 'file',
    name: 'test2',
    id: uuid()
  },
  {
    type: 'file',
    name: 'test3',
    id: uuid()
  },
  {
    type: 'folder',
    name: 'test_folder',
    id: uuid(),
    open: false,
    contents: [
      {
        type: 'file',
        name: 'test',
        id: uuid()
      },
      {
        type: 'folder',
        name: 'nested_folder',
        id: uuid(),
        open: false,
        contents: []
      }
    ]
  },
  {
    type: 'folder',
    name: 'test_folder2',
    id: uuid(),
    open: false,
    contents: [
      {
        type: 'file',
        name: 'test',
        id: uuid()
      },
      {
        type: 'folder',
        name: 'nested_folder',
        id: uuid(),
        open: false,
        contents: [
          {
            type: 'file',
            name: 'test',
            id: uuid()
          },
          {
            type: 'folder',
            name: 'nested_folder',
            id: uuid(),
            open: false,
            contents: []
          }
        ]
      }
    ]
  }
]

const toggleDir = (id, state) => {
  let newState = JSON.parse(JSON.stringify(state))

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

const AppState = combineReducers({
  dir
})

export default AppState
