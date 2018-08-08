import React, { Component } from 'react'
import FolderNav from './FolderNav'
import {
  NavContainer,
  NavHeader,
  NavHeaderH2,
  NavHeaderH3,
  NavHeaderGroup,
  NavControls,
  NavBody,
  NavControlButton,
  NavRow,
  NavRowGroup,
  NavRowText
} from '../styles/NavStyles'

// import mock api response
import { rootNode, test_folder, test_folder2 } from '../mocks/apiResponses'

// import icons
import Folder from '../icons/Folder'
import File from '../icons/File'
import FileUpload from '../icons/FileUpload'
import NewFolder from '../icons/NewFolder'

class Nav extends Component {
  state = {
    rootLevel: rootNode
  }

  render() {
    const { rootLevel } = this.state

    return (
      <NavContainer>
        <NavHeader>
          <NavControls>
            <NavControlButton>
              <FileUpload onClick={() => console.log('upload file clicked')} />
            </NavControlButton>
            <NavControlButton>
              <NewFolder onClick={() => console.log('new folder clicked')} />
            </NavControlButton>
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
              {item.type === 'file' && 
                <React.Fragment>
                  <NavRowGroup>
                    <File />
                    <NavRowText>{item.name}</NavRowText>
                  </NavRowGroup>
                  <NavRowText>{item.size}</NavRowText>
                </React.Fragment>
              }

              {item.type === 'folder' && 
                <FolderNav name={item.name} size={item.size} />
              }
            </NavRow>
          ))}
        </NavBody>
      </NavContainer>
    )
  }
}

export default Nav
