import React, { Fragment } from 'react'
import uuid from 'uuid'

// import styles
import {
  UL,
  LI,
  HorizonalRule,
  Group,
  Options,
  Option
} from '../styles/FileSystemStyles'

// import icons
import Folder from '../icons/Folder'
import OpenFolder from '../icons/OpenFolder'
import File from '../icons/File'
import NewFile from '../icons/FileUpload'
import NewFolder from '../icons/NewFolder'

// import components
import FileOptions from './FileOptions'
import FolderOptions from './FolderOptions'

const RecurseFolder = ({ inner = false, folder, toggle, selected, select }) => (
  // map over folder, if file render
  // if file, render name recurse into dir
  <UL inner={inner}>
    {folder.map(
      (item, i) =>
        item.type === 'file' ? (
          <LI
            onClick={() => select(item.id)}
            key={uuid()}
            selected={item.id === selected}
          >
            <Group primary>
              <File />
              {item.name}
              {item.id === selected && <FileOptions id={item.id} />}
            </Group>
            <Group>never | 0mb</Group>
          </LI>
        ) : (
          <Fragment key={uuid()}>
            <LI
              onClick={() => {
                select(item.id)
              }}
              selected={item.id === selected}
            >
              <Group primary>
                <Group
                  onClick={() => {
                    select(item.id)
                    if (item.id === selected) {
                      toggle(item.id)
                    }
                  }}
                >
                  {item.open ? <OpenFolder /> : <Folder />}
                  {item.name}
                </Group>
                {item.id === selected && (
                  <Fragment>
                    <FolderOptions
                      open={item.open}
                      id={item.id}
                      toggle={toggle}
                    />

                    <Options>
                      <Option onClick={() => console.log('newfile')}>
                        <NewFile />
                      </Option>
                      <Option onClick={() => console.log('newfolder')}>
                        <NewFolder />
                      </Option>
                    </Options>
                  </Fragment>
                )}
              </Group>
              <Group>never | 0mb</Group>
            </LI>

            {item.open &&
              (item.contents.length > 0 ? (
                <RecurseFolder
                  inner={true}
                  folder={item.contents}
                  toggle={toggle}
                  selected={selected}
                  select={select}
                />
              ) : (
                <UL inner={inner}>
                  <LI inactive>Folder is empty</LI>
                </UL>
              ))}
          </Fragment>
        )
    )}
  </UL>
)

export default RecurseFolder
