import React from 'react'

import { UL } from '../styles/FileSystemStyles'
import FileSystemHeader from './FileSystemHeader'
import FileSystemContents from './FileSystemContents'

const FileSystemWrapper = () => (
  <UL inner={false}>
    <FileSystemHeader />
    <FileSystemContents />
  </UL>
)

export default FileSystemWrapper
