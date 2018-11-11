import React, { Component, Fragment as _ } from 'react'
import { injectGlobal } from 'styled-components'
import { connect } from 'react-redux'
import { readItemsDB } from '../actions'
import PageHeader from './PageHeader'
import PageContentWrapper from './PageContentWrapper'

injectGlobal`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
  }
`

class App extends Component {
  componentDidMount() {
    const { readItemsDB } = this.props
    readItemsDB()
  }

  render() {
    return (
      <_>
        <PageHeader />
        <PageContentWrapper />
      </_>
    )
  }
}

export default connect(
  null,
  { readItemsDB }
)(App)
