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

export default openFolders
