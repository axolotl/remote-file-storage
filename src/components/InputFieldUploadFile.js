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
    this.setState({ file: event.target.files[0] })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { uploadFile, id } = this.props
    const { file } = this.state

    if (file === undefined) {
      console.warn('must select file to upload')
    } else {
      const data = new FormData()
      data.append('name', file.name)
      data.append('file', file)
      data.append('belongsTo', id)
      //const name = file.name

      console.log('attempting file upload')
      //uploadFile(name, data, id)
      uploadFile(data)
    }
  }

  render() {
    const { handleChange, handleSubmit } = this

    return (
      <form>
        <input type="file" onChange={handleChange} />
        <Option onClick={handleSubmit}>Upload</Option>
      </form>
    )
  }
}

export default connect(
  null,
  mapDispachToProps
)(UploadFile)
