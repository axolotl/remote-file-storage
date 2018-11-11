import React from 'react'

// import styles
import { OuterContainer, InnerContainer } from '../styles/ContentContainer'

// import components
import FileSystemWrapper from './FileSystemWrapper'

const Wrapper = () => (
  <OuterContainer>
    <InnerContainer>
      <FileSystemWrapper />
    </InnerContainer>
  </OuterContainer>
)

export default Wrapper
