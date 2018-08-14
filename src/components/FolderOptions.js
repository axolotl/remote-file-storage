import React from 'react'
import { Options, Option } from '../styles/FileSystemStyles'

const FolderOptions = ({ open, id, toggle }) => (
  <Options>
    <Option onClick={() => toggle(id)}>{open ? 'Close' : 'Open'}</Option>
    <Option onClick={() => console.log('rename clicked on ' + id)}>
      Rename
    </Option>
    <Option onClick={() => console.log('delete clicked ' + id)}>Delete</Option>
  </Options>
)

export default FolderOptions
