import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from '../actions'
import FileRow from './FileSystemContentsFileRow'
import FolderRow from './FileSystemContentsFolderRow'
import InputHandler from './InputHandlerWrapper'
import { UL, LI, DragItem } from '../styles/FileSystemStyles'

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

/* 
Explanation: 
This is a recursive component. It's job is to render all of the directories
and sub-directories in an orderly fashion. Problem: all this folder nesting
is represented by a flat (one level deep) object. Each folder is referenced
by a key, and its contents (value) are an array of items, some of which may
be folders themselves. When we want to know what is inside that nested 
folder we look for the key that matches its id. 

That setup informs how this component works. First, it looks at the key 
'base' (root level), and maps over all its contents to display them. 
Whenever one of those contents is a folder, we call the component again 
with that id as `subFolderID`. This keeps happening until all levels are
satisfied.

In addition, there are style changes between root and nested levels that 
need to be accounted for. For this we use the `inner` param. 
*/

const FileSystemContents = ({
  inner = false,
  subFolderID = 'base',
  directory,
  selected,
  inputFields,
  openFolders,
  toggleFolder,
  selectItem,
  addInputField,
  removeInputField
}) => (
  <UL inner={inner}>
    {directory[subFolderID] &&
      directory[subFolderID].map((item, i) => (
        <DragItem key={i}>
          {item.type === 'file' && (
            <FileRow
              key={item.id}
              {...item}
              selected={selected}
              selectItem={selectItem}
              toggleFolder={toggleFolder}
            />
          )}

          {item.type === 'folder' && (
            <Fragment key={item.id}>
              <FolderRow
                {...item}
                selected={selected}
                selectItem={selectItem}
                toggleFolder={toggleFolder}
                addInputField={addInputField}
                openFolders={openFolders}
              />

              {inputFields[item.id] && (
                <UL inner>
                  <InputHandler
                    id={item.id}
                    type={inputFields[item.id]}
                    removeInputField={removeInputField}
                  />
                </UL>
              )}

              {openFolders.includes(item.id) &&
                (directory[item.id] && directory[item.id].length > 0 ? (
                  <FileSystemContents
                    inner={true}
                    directory={directory}
                    toggleFolder={toggleFolder}
                    selected={selected}
                    selectItem={selectItem}
                    addInputField={addInputField}
                    removeInputField={removeInputField}
                    inputFields={inputFields}
                    openFolders={openFolders}
                    subFolderID={item.id}
                  />
                ) : (
                  <UL inner={true}>
                    <LI inactive>Folder is empty</LI>
                  </UL>
                ))}
            </Fragment>
          )}
        </DragItem>
      ))}
  </UL>
)

export default connect(
  mapStateToProps,
  mapDispachToProps
)(FileSystemContents)
