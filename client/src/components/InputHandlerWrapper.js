import React, { Fragment } from 'react'
import { LI, Option } from '../styles/FileSystemStyles'
import InputHandlerUploadFile from './InputHandlerUploadFile'
import InputHandlerNewFolder from './InputHandlerNewFolder'

const Wrapper = ({ alignCenter, id, removeInputField, type }) => (
  <LI input alignCenter={alignCenter ? alignCenter : ''}>
    {type === 'newfile' && <InputHandlerUploadFile id={id} />}

    {type === 'newfolder' && (
      <Fragment>
        <span>Enter name of new folder:</span>
        <InputHandlerNewFolder id={id} />
      </Fragment>
    )}

    <Option onClick={() => removeInputField(id)}>Cancel</Option>
  </LI>
)

export default Wrapper
