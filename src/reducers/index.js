import { combineReducers } from 'redux'
import local from './local'
import selected from './selected'
import inputFields from './inputFields'
import openFolders from './openFolders'

const AppState = combineReducers({
  local,
  selected,
  inputFields,
  openFolders
})

export default AppState
