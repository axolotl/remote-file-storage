import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
import { Option } from '../styles/FileSystemStyles'

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

class UploadFile extends Component {
  state = {}

  handleChange = event => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    this.setState({
      data
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { uploadFile } = this.props
    const { data } = this.state

    if (data === undefined) {
      throw new Error('must select file to upload')
    } else {
      uploadFile(data)
    }
  }

  render() {
    const { handleChange, handleSubmit } = this

    return (
      <div>
        <input type="file" onChange={handleChange} />
        <Option onClick={handleSubmit}>Upload</Option>
      </div>
    )
  }
}

export default connect(
  null,
  mapDispachToProps
)(UploadFile)
