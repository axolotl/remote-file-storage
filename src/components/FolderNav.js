import React, { Component } from 'react'
import { NavRowGroup, NavRowText, NavRow, NavBody } from '../styles/NavStyles'

import { rootNode, test_folder, test_folder2 } from '../mocks/apiResponses'

// import icons
import Folder from '../icons/Folder'
import OpenFolder from '../icons/OpenFolder'
import File from '../icons/File'
import FileUpload from '../icons/FileUpload'
import NewFolder from '../icons/NewFolder'

class FolderNav extends Component {
  state = {
    open: false,
    content: test_folder
  }

  toggleFolder = () => {
    const newState = this.state.open === false ? true : false
    this.setState({ open: newState })
  }

  render() {
    const { open, content } = this.state
    const { name, size } = this.props
    const { toggleFolder } = this

    return (
      <React.Fragment>
        
          {open ? (
            <React.Fragment>
              <NavRowGroup onClick={toggleFolder}>
                <OpenFolder />
                <NavRowText>{name}</NavRowText>
              </NavRowGroup>
              <NavRowText>{size}</NavRowText>

              <p> hello </p>
            </React.Fragment>
              

          ) : (
            <React.Fragment>
              <NavRowGroup onClick={toggleFolder}>
                <Folder />
                <NavRowText>{name}</NavRowText>
              </NavRowGroup>
              <NavRowText>{size}</NavRowText>
            </React.Fragment>
          )}
        
      </React.Fragment>
    )
  }
}

export default FolderNav



// <NavBody>
//                 {content.map((item, i) => (
//                   <NavRow key={i}>
//                     {item.type === 'file' && (
//                       <React.Fragment>
//                         <NavRowGroup>
//                           <File />
//                           <NavRowText>{item.name}</NavRowText>
//                         </NavRowGroup>
//                         <NavRowText>{item.size}</NavRowText>
//                       </React.Fragment>
//                     )}

//                     {item.type === 'folder' && (
//                       <FolderNav name={item.name} size={item.size} />
//                     )}
//                   </NavRow>
//                 ))}
//               </NavBody>