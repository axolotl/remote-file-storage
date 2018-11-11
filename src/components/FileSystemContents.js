import React, { Fragment as _ } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'

// import styles
import { UL, LI, Group, Options, Option } from '../styles/FileSystemStyles'

// import icons
import Folder from '../icons/Folder'
import OpenFolder from '../icons/OpenFolder'
import File from '../icons/File'
import NewFile from '../icons/FileUpload'
import NewFolder from '../icons/NewFolder'

// import components
import InputField from './InputField'
import ItemOptions from './ItemOptions'

// REFACTORING
import FileRow from './FileSystemContentsFileRow'
import FolderRow from './FileSystemContentsFolderRow'

const mapStateToProps = ({
  directory,
  selected,
  inputFields,
  openFolders
}) => ({
  directory,
  selected,
  inputFields,
  openFolders
})

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

const FileSystemContents = ({
  inner = false,
  subFolderID = false,
  directory,
  selected,
  inputFields,
  openFolders,
  toggleFolder,
  selectItem,
  addInputField
}) => (
  <UL inner={inner}>
    {((!subFolderID && directory.base) || directory[subFolderID]) && (
      <_>
        {(!subFolderID ? directory.base : directory[subFolderID]).map(
          (item, i) =>
            item.type === 'file' ? (
              <FileRow
                {...item}
                selected={selected}
                selectItem={selectItem}
                toggleFolder={toggleFolder}
              />
            ) : (
              <_ key={item.id}>
                <FolderRow
                  {...item}
                  selected={selected}
                  selectItem={selectItem}
                  toggleFolder={toggleFolder}
                  addInputField={addInputField}
                  openFolders={openFolders}
                />

                <UL inner>
                  <InputField
                    id={item.id}
                    addInputField={addInputField}
                    inputFields={inputFields}
                  />
                </UL>

                {openFolders.includes(item.id) &&
                  (directory[item.id] && directory[item.id].length > 0 ? (
                    <FileSystemContents
                      inner={true}
                      directory={directory}
                      toggleFolder={toggleFolder}
                      selected={selected}
                      selectItem={selectItem}
                      addInputField={addInputField}
                      inputFields={inputFields}
                      openFolders={openFolders}
                      subFolderID={item.id}
                    />
                  ) : (
                    <UL inner={true}>
                      <LI inactive>Folder is empty</LI>
                    </UL>
                  ))}
              </_>
            )
        )}
      </_>
    )}
  </UL>
)

export default connect(
  mapStateToProps,
  mapDispachToProps
)(FileSystemContents)
