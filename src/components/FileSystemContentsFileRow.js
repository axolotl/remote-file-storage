import React from 'react'
import ItemOptions from './ItemOptions'
import { UL, LI, Group, Options, Option } from '../styles/FileSystemStyles'
import File from '../icons/File'

const FileSystemContentsFileRow = ({
  id,
  belongsTo,
  name,
  type,
  selected,
  selectItem,
  toggleFolder
}) => (
  <LI onClick={() => selectItem(id)} key={id} selected={id === selected}>
    <Group primary>
      <File onClick={() => (id !== selected ? toggleFolder(id) : null)} />
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
