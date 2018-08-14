import React from 'react'
import { Options, Option } from '../styles/FileSystemStyles'

const FolderOptions = ({ open, id, toggleDir }) => (
  <Options>
    <Option onClick={() => toggleDir(id)}>{open ? 'Close' : 'Open'}</Option>
    <Option onClick={() => console.log('rename clicked on ' + id)}>
      Rename
    </Option>
    <Option onClick={() => console.log('delete clicked ' + id)}>Delete</Option>
  </Options>
)

export default FolderOptions
