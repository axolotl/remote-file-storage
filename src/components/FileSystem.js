import React, { Component, Fragment } from 'react'
import uuid from 'uuid'

import { UL, LI } from '../styles/FileSystemStyles'

/* What do I need to make this work?

Body, for boxing the whole thing
Rows, added per parsing of state tree
Columns, for properly grouping row content

*/

// import icons
import Folder from '../icons/Folder'
import OpenFolder from '../icons/OpenFolder'
import File from '../icons/File'

const RecurseFolder = ({ folder, toggle }) => (
  // map over folder, if file render
  // if file, render name recurse into dir
  <UL>
    {folder.map(
      (item, i) =>
        item.type === 'file' ? (
          <LI key={uuid()}>
            <File />
            {item.name}
          </LI>
        ) : (
          <Fragment key={uuid()}>
            <LI onClick={() => toggle(item.id)}>
              {item.open ? <OpenFolder /> : <Folder />}
              {item.name}
            </LI>
            {item.contents &&
              item.open && <RecurseFolder folder={item.contents} toggle={toggle} />}
          </Fragment>
        )
    )}
  </UL>
)

class FileSystem extends Component {
  state = {
    truth: [
      {
        type: 'file',
        name: 'test',
        id: uuid()
      },
      {
        type: 'file',
        name: 'test2',
        id: uuid()
      },
      {
        type: 'file',
        name: 'test3',
        id: uuid()
      },
      {
        type: 'folder',
        name: 'test_folder',
        id: uuid(),
        open: false,
        contents: [
          {
            type: 'file',
            name: 'test',
            id: uuid()
          },
          {
            type: 'folder',
            name: 'nested_folder',
            id: uuid(),
            open: false,
            contents: []
          }
        ]
      },
      {
        type: 'folder',
        name: 'test_folder2',
        id: uuid(),
        open: false,
        contents: [
          {
            type: 'file',
            name: 'test',
            id: uuid()
          },
          {
            type: 'folder',
            name: 'nested_folder',
            id: uuid(),
            open: false,
            contents: [
              {
                type: 'file',
                name: 'test',
                id: uuid()
              },
              {
                type: 'folder',
                name: 'nested_folder',
                id: uuid(),
                open: false,
                contents: []
              }
            ]
          }
        ]
      }
    ]
  }

  setOpen = folder => {
    folder.forEach((item, i) => {
      if (item.type === 'folder') {
        item.open = !item.open
        this.setOpen(item.contents)
      }
    })
    this.forceUpdate()
  }

  toggle = (id, folder = this.state.truth) => {
    folder.forEach((item, i) => {
      if (item.id === id) {
        item.open = !item.open
      }

      if (item.type === 'folder') {
        this.toggle(id, item.contents)
      }

    })
    this.forceUpdate()
  }

  render() {
    const { truth } = this.state
    const { toggle } = this

    return (
      <div>
        <button onClick={() => this.setOpen(truth)}>toggle open</button>
        <RecurseFolder folder={truth} toggle={toggle} />
      </div>
    )
  }
}

export default FileSystem
