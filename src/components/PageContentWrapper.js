import React from 'react'

import { CenterContent, ContainToWidth } from '../styles/Containers'
import FileSystemWrapper from './FileSystemWrapper'

const PageContentWrapper = () => (
  <CenterContent>
    <ContainToWidth>
      <FileSystemWrapper />
    </ContainToWidth>
  </CenterContent>
)

export default PageContentWrapper
