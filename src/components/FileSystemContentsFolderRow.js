import React, { Fragment as _ } from 'react'
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
}) => (
  <LI onClick={() => selectItem(id)} selected={id === selected}>
    <Group primary>
      <Group
        onClick={() => {
          selectItem(id)
          if (id === selected) {
            toggleFolder(id)
          }
        }}
      >
        {openFolders.includes(id) ? (
          <OpenFolder onClick={() => id !== selected && toggleFolder(id)} />
        ) : (
          <Folder onClick={() => id !== selected && toggleFolder(id)} />
        )}
        {name}
      </Group>
      {id === selected && (
        <_>
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
        </_>
      )}
    </Group>
    <Group>never | 0 mb</Group>
  </LI>
)

export default FileSystemContentsFolderRow
