import React from 'react'
import { injectGlobal } from 'styled-components'
import PageContainer from '../styles/PageContainer'
import PageHeader from './PageHeader'
import PageContent from './PageContent'

injectGlobal`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
  }
`

const App = () => (
  <PageContainer>
    <PageHeader />
    <PageContent />
  </PageContainer>
)

export default App
