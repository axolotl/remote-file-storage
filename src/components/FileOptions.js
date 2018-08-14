import React from 'react'
import { Options, Option } from '../styles/FileSystemStyles'

const FileOptions = ({ id }) => (
  <Options>
    <Option onClick={() => console.log('download clicked on ' + id)}>
      Download
    </Option>
    <Option onClick={() => console.log('rename clicked on ' + id)}>
      Rename
    </Option>
    <Option onClick={() => console.log('delete clicked on ' + id)}>
      Delete
    </Option>
  </Options>
)

export default FileOptions
