import axios from 'axios'
import { populateNewItem } from './createItemDB'

export const populateUploadSuccess = data => ({
  type: 'UPLOAD_DOCUMENT_SUCCESS',
  data
})

export const populateUploadFail = error => ({
  type: 'UPLOAD_DOCUMENT_FAIL',
  error
})

export const uploadFile = file => dispatch => {
  axios
    .post('/api/files', file)
    .then(res => {
      console.log(res)
      dispatch(populateNewItem(res.data))
    })
    .catch(error => console.log(error))
}
