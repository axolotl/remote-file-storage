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
import NewFile from '../icons/FileUpload'
import NewFolder from '../icons/NewFolder'

// import components
import RecurseFolder from './RecurseFolder'

const mapStateToProps = state => ({
  dir: state.dir,
  selected: state.selected,
  inputOption: state.inputOption
})

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

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
