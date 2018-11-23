import React, { Component, Fragment } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { connect } from 'react-redux'
import { readItemsDB } from '../actions'

import {
  CenterHeaderWithStyles,
  ContainToWidthWithStyles
} from '../styles/PageHeader'
import { H1, H3 } from '../styles/TextStyles'
import { CenterContent, ContainToWidth } from '../styles/Containers'
import { UL } from '../styles/FileSystemStyles'
import FileSystemHeader from './FileSystemHeader'
import FileSystemContents from './FileSystemContents'

// beautiful
import BeautifulDndTest from './BeautifulDndTest'

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
      <Fragment>
        <CenterHeaderWithStyles>
          <ContainToWidthWithStyles>
            <H1>RemoteFS</H1>
            <H3>A Project by Samuel Machat</H3>
          </ContainToWidthWithStyles>
        </CenterHeaderWithStyles>

        <CenterContent>
          <ContainToWidth>
            <Route exact path="/" render={props => <BeautifulDndTest />} />

            <Route
              path="/files"
              render={props => (
                <UL {...props} inner={false}>
                  <FileSystemHeader />
                  <FileSystemContents />
                </UL>
              )}
            />
          </ContainToWidth>
        </CenterContent>
      </Fragment>
    )
  }
}

export default withRouter(
  connect(
    null,
    { readItemsDB }
  )(App)
)
