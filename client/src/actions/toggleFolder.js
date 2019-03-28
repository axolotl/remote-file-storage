import { readItemsDB } from './readItemsDB'

export const setToggleFolder = id => ({
  type: 'TOGGLE',
  id
})

export const toggleFolder = id => (dispatch, getState) => {
  const { directory } = getState()
  dispatch(setToggleFolder(id))

  if (!directory[id]) {
    dispatch(readItemsDB(id))
  }
}
