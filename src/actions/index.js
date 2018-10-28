import axios from 'axios'
import { saveAs } from 'file-saver'

// read database //

export const populateInitialState = state => ({
  type: 'POPULATE_INITIAL_STATE',
  state
})

export const populateNestedState = (belongsTo, state) => ({
  type: 'POPULATE_NESTED_STATE',
  belongsTo,
  state
})

export const readItemsDB = id => dispatch => {
  if (!id) {
    axios
      .get('/api/items/')
      .then(res => dispatch(populateInitialState(res.data)))
      .catch(error => console.log(error))
  } else {
    axios
      .get(`/api/items/${id}`)
      .then(res => dispatch(populateNestedState(id, res.data)))
      .catch(error => console.log(error))
  }
}

// add to database //

export const populateNewItem = res => ({
  type: 'POPULATE_NEW_ITEM',
  item: res
})

export const createItemDB = (name, type, belongsTo) => dispatch => {
  axios
    .post('/api/items', {
      name,
      type,
      belongsTo: belongsTo === 'base' ? '' : belongsTo
    })
    .then(res => dispatch(populateNewItem(res.data)))
    .catch(error => console.log(error))
}

// update item in database //

export const populateNewName = (id, newName, belongsTo) => ({
  type: 'POPULATE_NEW_NAME',
  id,
  newName,
  belongsTo: belongsTo === '' ? 'base' : belongsTo
})

export const updateItemDB = (id, newName) => dispatch => {
  axios
    .post(`/api/items/${id}`, {
      name: newName
    })
    .then(res => dispatch(populateNewName(id, newName, res.data.belongsTo)))
    .catch(error => console.log(error))
}

// delete from database //

export const populateDeleteItem = (id, belongsTo) => ({
  type: 'POPULATE_DELETE_ITEM',
  id,
  belongsTo: belongsTo === '' ? 'base' : belongsTo
})

export const deleteItemDB = (id, belongsTo) => dispatch => {
  axios
    .delete(`/api/items/${id}`)
    .then(res => dispatch(populateDeleteItem(id, belongsTo)))
    .catch(error => console.log(error))
}

// toggle folder //

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

// select item //

export const setSelectedItem = id => ({
  type: 'SELECT_ITEM',
  id
})

export const selectItem = id => (dispatch, getState) => {
  const { selected } = getState()
  if (id !== selected) {
    dispatch(setSelectedItem(id))
  }
}

// add/remove input field //

export const addInputField = (field, selection) => ({
  type: 'ADD_INPUT_FIELD',
  field,
  selection
})

export const removeInputField = field => ({
  type: 'REMOVE_INPUT_FIELD',
  field
})

// upload file //

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
    .post('/api/uploadfile', file)
    .then(res => dispatch(populateNewItem(res.data)))
    .catch(error => console.log(error))
}

// download file //

export const downloadFile = id => dispatch => {
  // saveAs("https://httpbin.org/image", "image.jpg")
  // saveAs(`/api/download/${id}`)
  axios({
    url: `/api/download/${id}`,
    method: 'GET',
    responseType: 'blob' // important
  })
    .then(res => {
      saveAs(res.data, 'test.jpg')
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })

  // axios({
  //   url: `/api/download/${id}`,
  //   method: 'GET',
  //   responseType: 'blob' // important
  // }).then(res => {
  //   const url = window.URL.createObjectURL(new Blob([res.data]))
  //   const link = document.createElement('a')
  //   link.href = url
  //   link.setAttribute('download', 'file.png')
  //   document.body.appendChild(link)
  //   link.click()
  // })
}
