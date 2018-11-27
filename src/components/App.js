import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'

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

// sortable
import SortableTreeTest from './SortableTreeTest'

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

  onDragEnd = result => console.log(result)

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <CenterHeaderWithStyles>
          <ContainToWidthWithStyles>
            <H1>RemoteFS</H1>
            <H3>A Project by Samuel Machat</H3>
          </ContainToWidthWithStyles>
        </CenterHeaderWithStyles>

        <CenterContent>
          <ContainToWidth>
            <Route
              exact
              path="/beautiful"
              render={props => <BeautifulDndTest />}
            />
            <Route
              exact
              path="/sortable"
              render={props => <SortableTreeTest />}
            />

            <Route
              path="/"
              exact
              render={props => (
                <UL {...props} inner={false}>
                  <FileSystemHeader />
                  <FileSystemContents />
                </UL>
              )}
            />
          </ContainToWidth>
        </CenterContent>
      </DragDropContext>
    )
  }
}

export default withRouter(
  connect(
    null,
    { readItemsDB }
  )(App)
)
