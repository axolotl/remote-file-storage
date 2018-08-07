import React from 'react'

// import styles
import { OuterContainer, InnerContainer } from '../styles/ContentContainer'
import { Text } from '../styles/TextStyles'

// import components
//import StateUpdater from './StateUpdater'
import Nav from './Nav'

const Content = () => (
  <OuterContainer>
    <InnerContainer>
      <Text>
        Explanation of how this all works here.
      </Text>
      <Nav />
    </InnerContainer>
  </OuterContainer>
)

export default Content
