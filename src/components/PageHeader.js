import React from 'react'
import { CenterHeaderWithStyles, ContainToWidthWithStyles } from '../styles/PageHeader'
import { H1, H3 } from '../styles/TextStyles'

const Header = () => (
  <CenterHeaderWithStyles>
    <ContainToWidthWithStyles>
      <H1>RemoteFS</H1>
      <H3>A Project by Samuel Machat</H3>
    </ContainToWidthWithStyles>
  </CenterHeaderWithStyles>
)

export default Header
