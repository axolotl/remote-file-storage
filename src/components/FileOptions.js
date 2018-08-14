import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
import uuid from 'uuid'
import { Options, Option } from '../styles/FileSystemStyles'

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

class FileOptions extends Component {
  state = {
    selected: '',
    value: ''
  }

  handleSelectedChange = option => {
    this.setState({ selected: option })
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.renameItem(this.props.id, this.state.value)
    this.setState({ value: '' })
  }

  render() {
    const { handleChange, handleSubmit, handleSelectedChange } = this
    const { selected, value } = this.state
    const { id } = this.props

    return (
      <Options>
        {selected === '' && (
          <Fragment>
            <Option onClick={() => console.log('download clicked on ' + id)}>
              Download
            </Option>
            <Option onClick={() => handleSelectedChange('rename')}>
              Rename
            </Option>
            <Option onClick={() => handleSelectedChange('delete')}>
              Delete
            </Option>
          </Fragment>
        )}

        {selected === 'rename' && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={value}
              onChange={handleChange}
              placeholder="type new name here"
            />
            <input type="submit" value="Submit" />
          </form>
        )}

        {selected === 'delete' && (
          <span>
            Are you sure you want to delete this file?
            <button onClick={() => console.log('clicked yes')}>Yes</button>
            <button onClick={() => console.log('clicked no')}>No</button>
          </span>
        )}
      </Options>
    )
  }
}

export default connect(
  null,
  mapDispachToProps
)(FileOptions)
