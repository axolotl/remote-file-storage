import React from 'react'
import { OuterContainer, InnerContainer } from '../styles/HeaderStyles'
import { H1, H3 } from '../styles/TextStyles'

const Header = () => (
  <OuterContainer>
    <InnerContainer>
      <H1>RemoteFS</H1>
      <H3>A Project by Samuel Machat</H3>
    </InnerContainer>
  </OuterContainer>
)

export default Header
