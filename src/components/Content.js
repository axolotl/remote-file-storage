import React from 'react'

// import styles
import { OuterContainer, InnerContainer } from '../styles/ContentContainer'
import { Text } from '../styles/TextStyles'

// import components
//import StateUpdater from './StateUpdater'
import Nav from './Nav'
import FileSystem from './FileSystem'

const Content = () => (
  <OuterContainer>
    <InnerContainer>
      <Text>
        Explanation of how this all works here.
      </Text>
    {/*<Nav />*/}
    <FileSystem />
    </InnerContainer>
  </OuterContainer>
)

export default Content
