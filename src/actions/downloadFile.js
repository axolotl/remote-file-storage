import axios from 'axios'
import { saveAs } from 'file-saver'

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000'

export const downloadFile = (id, name) => dispatch => {
  // Server will send file as a blob. We need to specify this so that
  // axios knows how to handle it. Then we use `saveAs` from the
  // `file-saver` library to exectute the file download properly.
  // Otherwise querying via XMLHttpRequest overrides the default
  // download behavior. Finally, we pull the filename from the
  // content-disposition header.

  axios({
    url: `${apiUrl}/api/files/${id}`,
    method: 'GET',
    responseType: 'blob' // important
  })
    .then(res => {
      console.log(res)
      saveAs(res.data, name)
    })
    .catch(err => {
      console.log(err)
    })
}
