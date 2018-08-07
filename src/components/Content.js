import React from 'react'

// import styles
import { OuterContainer, InnerContainer } from '../styles/ContentContainer'
import { Text } from '../styles/TextStyles'

// import components
import StateUpdater from './StateUpdater'

const Content = () => (
  <OuterContainer>
    <InnerContainer>
      <Text>
        Content to go here pending analysis of the project to be completed.
      </Text>
      <Text>
        Depending on the nature of the project, much of this boilerplate
        configuration could change.
      </Text>
      <Text>
        The following input methods are to make sure <code>redux</code> and{' '}
        <code>redux-thunk</code> are properly configured.
      </Text>
      <StateUpdater />
    </InnerContainer>
  </OuterContainer>
)

export default Content
