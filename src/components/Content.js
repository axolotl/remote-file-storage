import React from 'react'

// import styles
import { OuterContainer, InnerContainer } from '../styles/ContentContainer'
import { Text } from '../styles/TextStyles'

// import components
import FileSystem from './FileSystem'

const Content = () => (
  <OuterContainer>
    <InnerContainer>
      <Text>Explanation of how this all works here.</Text>
      <FileSystem />
    </InnerContainer>
  </OuterContainer>
)

export default Content
