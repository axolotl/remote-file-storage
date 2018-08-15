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
    option: '',
    newName: ''
  }

  changeOption = option => {
    this.setState({ option })
  }

  changeNewName = event => {
    this.setState({ newName: event.target.value })
  }

  submitNewName = event => {
    event.preventDefault()
    const { renameItem, id } = this.props
    renameItem(id, this.state.newName)
    this.setState({ newName: '' })
  }

  handleDelete = event => {
    const { deleteItem, id } = this.props 
    deleteItem(id)
  }

  render() {
    const { changeNewName, submitNewName, changeOption, handleDelete } = this
    const { option, newName } = this.state
    const { id, groupType, open, toggleDir } = this.props

    return (
      <Options>
        {groupType === 'file' && option === '' && (
          <Fragment>
            <Option onClick={() => console.log('download clicked on ' + id)}>
              Download
            </Option>
            <Option onClick={() => changeOption('rename')}>
              Rename
            </Option>
            <Option onClick={() => changeOption('delete')}>
              Delete
            </Option>
          </Fragment>
        )}

        {groupType === 'folder' && option === '' && (
          <Fragment>
            <Option onClick={() => toggleDir(id)}>{open ? 'Close' : 'Open'}</Option>
            <Option onClick={() => changeOption('rename')}>
              Rename
            </Option>
            <Option onClick={() => changeOption('delete')}>
              Delete
            </Option>
          </Fragment>
        )}

        {option === 'rename' && (
          <form onSubmit={submitNewName}>
            <input
              type="text"
              value={newName}
              onChange={changeNewName}
              placeholder="type new name here"
            />
            <input type="submit" value="Submit" />
          </form>
        )}

        {option === 'delete' && (
          <span>
            Are you sure you want to delete this file?
            <button onClick={() => handleDelete()}>Yes</button>
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
