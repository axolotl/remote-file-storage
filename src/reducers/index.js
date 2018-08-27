import { combineReducers } from 'redux'

const local = (state = {}, action) => {
  switch (action.type) {
    case 'POPULATE_INITIAL_STATE':
      return { ...state, base: action.state }
    case 'POPULATE_NESTED_STATE':
      return { ...state, [action.belongsTo]: action.state }
    case 'POPULATE_NEW_ITEM':
      return action.item.belongsTo === ''
        ? { ...state, base: [...state.base, action.item] }
        : {
            ...state,
            [action.belongsTo]: [...state[action.belongsTo], action.item]
          }
    case 'POPULATE_NEW_NAME':
      return action.belongsTo === ''
        ? { ...state, base: [...state.base, [action.id]: {...[action.id], name: action.newName}] }
        : {
            ...state,
            [action.belongsTo]: [
              ...state[action.belongsTo],
              [action.id]: {
                ...[action.id],
                name: action.newName
              }
            ]
          }
    case 'POPULATE_DELETE_ITEM':
      return // can be done in an expression?
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

const openFolders = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE':
      return state.includes(action.id)
        ? state.filter(item => item !== action.id)
        : [...state, action.id]
    default:
      return state
  }
}

const AppState = combineReducers({
  local,
  selected,
  inputFields,
  openFolders
})

export default AppState
