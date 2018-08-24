import React from 'react'

// import styles
import { OuterContainer, InnerContainer } from '../styles/ContentContainer'

// import components
import FileSystem from './FileSystem'

const Content = () => (
  <OuterContainer>
    <InnerContainer>
      <FileSystem />
    </InnerContainer>
  </OuterContainer>
)

export default Content
