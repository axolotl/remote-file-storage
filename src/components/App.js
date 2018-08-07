import React from 'react'
import { injectGlobal } from 'styled-components'
import PageContainer from '../styles/PageContainer'
import Header from './Header'
import Content from './Content'

injectGlobal`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
  }
`

const App = () => (
  <PageContainer>
    <Header />
    <Content />
  </PageContainer>
)

export default App
