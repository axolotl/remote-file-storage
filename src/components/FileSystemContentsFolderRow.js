import React, { Fragment } from 'react'
import ItemOptions from './ItemOptions'
import { LI, Group, Options, Option } from '../styles/FileSystemStyles'
import FolderIcon from '../icons/Folder'
import OpenFolderIcon from '../icons/OpenFolder'
import NewFileIcon from '../icons/FileUpload'
import NewFolderIcon from '../icons/NewFolder'

const FileSystemContentsFolderRow = ({
  id,
  belongsTo,
  name,
  type,
  selected,
  selectItem,
  toggleFolder,
  addInputField,
  openFolders
}) => {
  // several conditions hinge on this evaluating true or false
  const rowSelected = id === selected

  return (
    <LI selected={rowSelected} onClick={() => selectItem(id)}>
      <Group primary>
        {/* The click behavior here is a bit weird. The icon will toggle
        folder whenever, the group only when row is selected. But because 
        of nesting, clicking on the icon while the row is selected would
        trigger two toggle actions, canceling each other out. Hence the 
        `!rowSelected` for the icon. */}
        <Group onClick={() => rowSelected && toggleFolder(id)}>
          <div onClick={() => !rowSelected && toggleFolder(id)}>
            {openFolders.includes(id) ? <OpenFolderIcon /> : <FolderIcon />}
          </div>
          {name}
        </Group>
        {rowSelected && (
          <Fragment>
            <ItemOptions
              id={id}
              belongsTo={belongsTo}
              type={type}
              open={openFolders.includes(id)}
              groupType="file"
            />

            <Options>
              <Option onClick={() => addInputField(id, 'newfile')}>
                <NewFileIcon />
              </Option>
              <Option onClick={() => addInputField(id, 'newfolder')}>
                <NewFolderIcon />
              </Option>
            </Options>
          </Fragment>
        )}
      </Group>
      <Group>never | 0 mb</Group>
    </LI>
  )
}

export default FileSystemContentsFolderRow
