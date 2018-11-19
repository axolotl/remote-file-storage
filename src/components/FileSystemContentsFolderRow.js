import React, { Fragment } from 'react'
import ItemOptions from './ItemOptions'
import { UL, LI, Group, Options, Option } from '../styles/FileSystemStyles'
import Folder from '../icons/Folder'
import OpenFolder from '../icons/OpenFolder'
import NewFile from '../icons/FileUpload'
import NewFolder from '../icons/NewFolder'

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
        <Group onClick={() => rowSelected && toggleFolder(id)}>
          <div onClick={() => !rowSelected && toggleFolder(id)}>
            {openFolders.includes(id) ? <OpenFolder /> : <Folder />}
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
                <NewFile />
              </Option>
              <Option onClick={() => addInputField(id, 'newfolder')}>
                <NewFolder />
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
