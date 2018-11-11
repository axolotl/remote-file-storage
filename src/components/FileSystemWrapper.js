import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'

// import styles
import { UL } from '../styles/FileSystemStyles'

// import components
import FileSystemHeader from './FileSystemHeader'
import FileSystemContents from './FileSystemContents'

class FileSystemWrapper extends Component {
  render() {
    return (
      <UL inner={false}>
        <FileSystemHeader />
        <FileSystemContents />
      </UL>
    )
  }
}

export default FileSystemWrapper
