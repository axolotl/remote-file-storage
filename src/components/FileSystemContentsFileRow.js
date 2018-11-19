import React from 'react'
import ItemOptions from './ItemOptions'
import { UL, LI, Group, Options, Option } from '../styles/FileSystemStyles'
import FileIcon from '../icons/File'

const FileSystemContentsFileRow = ({
  id,
  belongsTo,
  name,
  type,
  selected,
  selectItem,
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
    <Group>never | 0 mb</Group>
  </LI>
)

export default FileSystemContentsFileRow
