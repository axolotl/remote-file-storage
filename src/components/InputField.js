import React, { Fragment as _ } from 'react'
import { LI, Option } from '../styles/FileSystemStyles'
import InputFieldUploadFile from './InputFieldUploadFile'
import InputFieldNewFolder from './InputFieldNewFolder'

const InputField = ({ alignCenter, id, removeInputField, type }) => (
  <LI input alignCenter={alignCenter ? alignCenter : ''}>
    {type === 'newfile' && <InputFieldUploadFile id={id} />}

    {type === 'newfolder' && (
      <_>
        <span>Enter name of new folder:</span>
        <InputFieldNewFolder id={id} />
      </_>
    )}

    <Option onClick={() => removeInputField(id)}>Cancel</Option>
  </LI>
)

export default InputField
