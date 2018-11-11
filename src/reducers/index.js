import { combineReducers } from 'redux'
import directory from './directory'
import selected from './selected'
import inputFields from './inputFields'
import openFolders from './openFolders'

const AppState = combineReducers({
  directory,
  selected,
  inputFields,
  openFolders
})

export default AppState
