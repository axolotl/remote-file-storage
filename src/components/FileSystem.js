import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
import uuid from 'uuid'

// import styles
import {
  UL,
  LI,
  HorizonalRule,
  Group,
  Options,
  Option
} from '../styles/FileSystemStyles'

// import icons
import Folder from '../icons/Folder'
import OpenFolder from '../icons/OpenFolder'
import File from '../icons/File'
import NewFile from '../icons/FileUpload'
import NewFolder from '../icons/NewFolder'

const mapStateToProps = state => ({
  dir: state.dir,
  selected: state.selected,
  inputOption: state.inputOption
})

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

const FileOptions = ({ id }) => (
  <Options>
    <Option onClick={() => console.log('download clicked on ' + id)}>
      Download
    </Option>
    <Option onClick={() => console.log('rename clicked on ' + id)}>
      Rename
    </Option>
    <Option onClick={() => console.log('delete clicked on ' + id)}>
      Delete
    </Option>
  </Options>
)

const FolderOptions = ({ open, id, toggle }) => (
  <Options>
    <Option onClick={() => toggle(id)}>{open ? 'Close' : 'Open'}</Option>
    <Option onClick={() => console.log('rename clicked on ' + id)}>
      Rename
    </Option>
    <Option onClick={() => console.log('delete clicked ' + id)}>Delete</Option>
  </Options>
)

const RecurseFolder = ({ inner = false, folder, toggle, selected, select }) => (
  // map over folder, if file render
  // if file, render name recurse into dir
  <UL inner={inner}>
    {folder.map(
      (item, i) =>
        item.type === 'file' ? (
          <LI
            onClick={() => select(item.id)}
            key={uuid()}
            selected={item.id === selected}
          >
            <Group primary>
              <File />
              {item.name}
              {item.id === selected && <FileOptions id={item.id} />}
            </Group>
            <Group>never | 0mb</Group>
          </LI>
        ) : (
          <Fragment key={uuid()}>
            <LI
              onClick={() => {
                select(item.id)
              }}
              selected={item.id === selected}
            >
              <Group primary>
                <Group
                  onClick={() => {
                    select(item.id)
                    if (item.id === selected) {
                      toggle(item.id)
                    }
                  }}
                >
                  {item.open ? <OpenFolder /> : <Folder />}
                  {item.name}
                </Group>
                {item.id === selected && (
                  <FolderOptions
                    open={item.open}
                    id={item.id}
                    toggle={toggle}
                  />
                )}
              </Group>
              <Group>never | 0mb</Group>
            </LI>

            {item.open &&
              (item.contents.length > 0 ? (
                <RecurseFolder
                  inner={true}
                  folder={item.contents}
                  toggle={toggle}
                  selected={selected}
                  select={select}
                />
              ) : (
                <UL inner={inner}>
                  <LI inactive>Folder is empty</LI>
                </UL>
              ))}
          </Fragment>
        )
    )}
  </UL>
)

const FileSystem = ({
  dir,
  toggleDir,
  selected,
  selectItem,
  inputOption,
  setInputOption
}) => (
  <UL inner={false}>
    <LI header>
      <Group>Files and Folders</Group>
      <Group>
        <Options>
          <Option onClick={() => setInputOption('newfile')}>
            <NewFile />
          </Option>
          <Option onClick={() => setInputOption('newfolder')}>
            <NewFolder />
          </Option>
        </Options>
      </Group>
      <Group>Last modified | Size</Group>
    </LI>

    {inputOption === 'newfile' && (
      <LI input>
        <input
          ref={ref => {
            this.uploadInput = ref
          }}
          type="file"
        />
        <Option onClick={() => setInputOption('')}>Cancel</Option>
      </LI>
    )}

    {inputOption === 'newfolder' && (
      <LI input>
        <span>Create new folder at /: </span>
        <input type="text" />
        <Option onClick={() => setInputOption('')}>Cancel</Option>
      </LI>
    )}

    <HorizonalRule />
    <RecurseFolder
      folder={dir}
      toggle={toggleDir}
      selected={selected}
      select={selectItem}
    />
  </UL>
)

export default connect(
  mapStateToProps,
  mapDispachToProps
)(FileSystem)
