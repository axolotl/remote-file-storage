import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
import uuid from 'uuid'

// import styles
import { UL, LI } from '../styles/FileSystemStyles'

// import icons
import Folder from '../icons/Folder'
import OpenFolder from '../icons/OpenFolder'
import File from '../icons/File'

const mapStateToProps = state => ({
  dir: state.dir
})

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

const RecurseFolder = ({ inner = false, folder, toggle }) => (
  // map over folder, if file render
  // if file, render name recurse into dir
  <UL inner={inner}>
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
              item.open && (
                <RecurseFolder
                  inner={true}
                  folder={item.contents}
                  toggle={toggle}
                />
              )}
          </Fragment>
        )
    )}
  </UL>
)

const FileSystem = ({ dir, toggleDir }) => (
  <RecurseFolder folder={dir} toggle={toggleDir} />
)

export default connect(
  mapStateToProps,
  mapDispachToProps
)(FileSystem)
