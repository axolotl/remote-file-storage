import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
import { LI, Option } from '../styles/FileSystemStyles'
import InputFieldNewFolder from './InputFieldNewFolder'

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

const InputField = ({ head, id, removeInputField, inputFields, createFolder }) => (
  <Fragment>
    {inputFields[id] === 'newfile' && (
      <LI input head={head ? head : ''}>
        <input
          ref={ref => {
            this.uploadInput = ref
          }}
          type="file"
        />
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
        <InputFieldNewFolder id={id} createFolder={createFolder} removeInputField={removeInputField}/>
        <Option onClick={() => removeInputField(id)}>Cancel</Option>
      </LI>
    )}
  </Fragment>
)

export default connect(
  null,
  mapDispachToProps
)(InputField)
