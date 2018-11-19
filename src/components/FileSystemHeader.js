import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { addInputField, removeInputField } from '../actions'

import {
  LI,
  HorizonalRule,
  Group,
  Options,
  Option
} from '../styles/FileSystemStyles'

import NewFile from '../icons/FileUpload'
import NewFolder from '../icons/NewFolder'

import InputField from './InputField'

const mapStateToProps = ({ inputFields }) => ({
  inputFields
})

const FileSystemHeader = ({ inputFields, addInputField, removeInputField }) => (
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

    {inputFields['base'] && (
      <InputField
        alignCenter
        id="base"
        type={inputFields['base']}
        removeInputField={removeInputField}
      />
    )}

    <HorizonalRule />
  </Fragment>
)

export default connect(
  mapStateToProps,
  { addInputField, removeInputField }
)(FileSystemHeader)
