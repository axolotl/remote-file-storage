import React, { Fragment } from 'react'
import { LI, Option } from '../styles/FileSystemStyles'
import InputFieldUploadFile from './InputFieldUploadFile'
import InputFieldNewFolder from './InputFieldNewFolder'

const InputField = ({ alignCenter, id, removeInputField, type }) => (
  <LI input alignCenter={alignCenter ? alignCenter : ''}>
    {type === 'newfile' && <InputFieldUploadFile id={id} />}

    {type === 'newfolder' && (
      <Fragment>
        <span>Enter name of new folder:</span>
        <InputFieldNewFolder id={id} />
      </Fragment>
    )}

    <Option onClick={() => removeInputField(id)}>Cancel</Option>
  </LI>
)

export default InputField
