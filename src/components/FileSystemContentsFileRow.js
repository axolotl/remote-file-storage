import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import ItemOptions from './RowItemOptions'
import { LI, Group } from '../styles/FileSystemStyles'
import FileIcon from '../icons/File'

const FileSystemContentsFileRow = ({
  id,
  belongsTo,
  name,
  type,
  selected,
  selectItem,
  toggleFolder,
  index
}) => (
  <Draggable draggableId={id} index={index}>
    {provided => (
      // selected expression will be true or false which will determine styling
      <LI
        selected={id === selected}
        onClick={() => selectItem(id)}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        innerRef={provided.innerRef}
      >
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
    )}
  </Draggable>
)

export default FileSystemContentsFileRow
