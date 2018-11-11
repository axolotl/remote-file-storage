import React from 'react'

// import styles
import { CenterContent, ContainToWidth } from '../styles/Containers'

// import components
import FileSystemWrapper from './FileSystemWrapper'

const PageContentWrapper = () => (
  <CenterContent>
    <ContainToWidth>
      <FileSystemWrapper />
    </ContainToWidth>
  </CenterContent>
)

export default PageContentWrapper
