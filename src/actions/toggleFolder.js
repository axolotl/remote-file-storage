import { readItemsDB } from './readItemsDB'

export const setToggleFolder = id => ({
  type: 'TOGGLE',
  id
})

export const toggleFolder = id => (dispatch, getState) => {
  const { local } = getState()
  dispatch(setToggleFolder(id))

  if (!local[id]) {
    dispatch(readItemsDB(id))
  }
}
