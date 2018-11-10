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
            [action.item.belongsTo]: [
              ...state[action.item.belongsTo],
              action.item
            ]
          }
    case 'POPULATE_NEW_NAME':
      return {
        ...state,
        [action.belongsTo]: [
          ...state[action.belongsTo].map(
            item =>
              item.id === action.id ? { ...item, name: action.newName } : item
          )
        ]
      }
    case 'POPULATE_DELETE_ITEM':
      return {
        ...state,
        [action.belongsTo]: [
          ...state[action.belongsTo].filter(item => item.id !== action.id)
        ]
      }
    default:
      return state
  }
}

export default local
