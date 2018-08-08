import React, { Component } from 'react'
import Folder from '../icons/Folder'
import OpenFolder from '../icons/OpenFolder'
import { NavRowGroup, NavRowText } from '../styles/NavStyles'

import { rootNode, test_folder, test_folder2 } from '../mocks/apiResponses'

class FolderNav extends Component {
  state = {
    open: false,
    content: test_folder,
  }

  toggleFolder = () => {
    const newState = this.state.open === false ? true : false
    this.setState({ open: newState })
  }

  render() {
    const { open } = this.state
    const { name, size } = this.props
    const { toggleFolder } = this

    return (
      <React.Fragment>
        <NavRowGroup onClick={toggleFolder}>
          {open ?
            <OpenFolder />
            :
            <Folder />
          }
          <NavRowText>{name}</NavRowText>
        </NavRowGroup>
        <NavRowText>{size}</NavRowText>
      </React.Fragment>
    )
  }
}

export default FolderNav