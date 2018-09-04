import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
import { LI, Option } from '../styles/FileSystemStyles'
import InputFieldUploadFile from './InputFieldUploadFile'
import InputFieldNewFolder from './InputFieldNewFolder'

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

const InputField = ({ head, id, removeInputField, inputFields }) => (
  <Fragment>
    {inputFields[id] === 'newfile' && (
      <LI input head={head ? head : ''}>
        <InputFieldUploadFile id={id} />
        <Option onClick={() => removeInputField(id)}>Cancel</Option>
      </LI>
    )}

    {inputFields[id] === 'newfolder' && (
      <LI input head={head ? head : ''}>
        {head ? (
          <span>Enter name of new root level folder:</span>
        ) : (
          <span>Enter name of new subfolder:</span>
        )}
        <InputFieldNewFolder id={id} />
        <Option onClick={() => removeInputField(id)}>Cancel</Option>
      </LI>
    )}
  </Fragment>
)

export default connect(
  null,
  mapDispachToProps
)(InputField)
