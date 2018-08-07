import React, { Component } from 'react'
import { NavContainer, NavHeader, NavHeaderH2, NavHeaderH3, NavHeaderGroup, NavControls, NavBody, NavControlButton, NavRow } from '../styles/NavStyles'

// import mock api response
import { rootNode, test_folder, test_folder2 } from '../mocks/apiResponses'

class Nav extends Component {
  state = {
    rootLevel: rootNode,
  }

  render() {
    const { rootLevel } = this.state

    return (
      <NavContainer>
        <NavHeader>
          <NavControls>
            <NavControlButton>New file</NavControlButton>
            <NavControlButton>New folder</NavControlButton>
          </NavControls>
        </NavHeader>
        <NavHeader>
          <NavHeaderH2>Files and Folders</NavHeaderH2>
          <NavHeaderGroup>
            <NavHeaderH3>Last Modified</NavHeaderH3>
            <NavHeaderH3>Size</NavHeaderH3>
          </NavHeaderGroup>
        </NavHeader>
        <NavBody>
          {rootLevel.map((item, i) => (
            <NavRow key={i}>
              <span>{item.name}</span>
              <span>{item.size}</span>
            </NavRow>
          ))}
        </NavBody>
      </NavContainer>
    )
  }
}

export default Nav