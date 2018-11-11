import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addInputField } from '../actions'

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
import FileSystemContents from './FileSystemContents'
import InputField from './InputField'

const mapStateToProps = ({ inputFields }) => ({
  inputFields
})

const FileSystemHeader = ({ inputFields, addInputField }) => (
  <Fragment>
    <LI header>
      <Group>Files and Folders</Group>

      <Group>
        <Options>
          <Option onClick={() => addInputField('base', 'newfile')}>
            <NewFile />
          </Option>
          <Option onClick={() => addInputField('base', 'newfolder')}>
            <NewFolder />
          </Option>
        </Options>
      </Group>

      <Group>Last modified | Size</Group>
    </LI>

    <InputField
      head
      id="base"
      addInputField={addInputField}
      inputFields={inputFields}
    />

    <HorizonalRule />
  </Fragment>
)

export default connect(
  mapStateToProps,
  { addInputField }
)(FileSystemHeader)
