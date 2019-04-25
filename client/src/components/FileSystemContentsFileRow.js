import React from 'react'
import ItemOptions from './RowItemOptions'
import { LI, Group } from '../styles/FileSystemStyles'
import FileIcon from '../icons/File'
import formatFileSize from '../utils/formatFileSize'

const FileSystemContentsFileRow = ({
  id,
  belongsTo,
  name,
  type,
  selected,
  selectItem,
  size,
  toggleFolder
}) => (
  // selected expression will be true or false which will determine styling
  <LI selected={id === selected} onClick={() => selectItem(id)}>
    <Group primary>
      <FileIcon />
      {name}
      {id === selected && (
        <ItemOptions
          id={id}
          belongsTo={belongsTo}
          groupType="file"
          name={name}
          type={type}
        />
      )}
    </Group>
    <Group>never | {formatFileSize(size)}</Group>
  </LI>
)

export default FileSystemContentsFileRow
