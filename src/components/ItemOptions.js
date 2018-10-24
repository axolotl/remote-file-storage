import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
import { Options, Option } from '../styles/FileSystemStyles'
import { InputField, InputButton } from '../styles/FormStyles'

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

class ItemOptions extends Component {
  state = {
    option: '',
    newName: '',
    error: false
  }

  changeOption = option => {
    this.setState({ option })
  }

  changeNewName = event => {
    this.setState({ newName: event.target.value })
  }

  submitNewName = event => {
    event.preventDefault()
    const { updateItemDB, id } = this.props
    const { newName } = this.state

    if (newName.length > 0) {
      updateItemDB(id, this.state.newName)
      this.setState({ newName: '' })
    } else {
      this.setState({ error: true })
    }
  }

  handleDelete = event => {
    const { deleteItemDB, id, belongsTo } = this.props
    deleteItemDB(id, belongsTo)
  }

  setErrorFalse = () => {
    this.setState({ error: false })
  }

  handleDownload = id => {
    this.props.downloadFile(id)
  }

  render() {
    const {
      changeNewName,
      submitNewName,
      changeOption,
      handleDelete,
      setErrorFalse,
      handleDownload
    } = this
    const { option, newName, error } = this.state
    const { id, groupType, open, toggleDir } = this.props

    return (
      <Options>
        {groupType === 'file' &&
          option === '' && (
            <Fragment>
              <Option onClick={() => handleDownload(id)}>Download</Option>
              <Option onClick={() => changeOption('rename')}>Rename</Option>
              <Option onClick={() => changeOption('delete')}>Delete</Option>
            </Fragment>
          )}

        {groupType === 'folder' &&
          option === '' && (
            <Fragment>
              <Option onClick={() => toggleDir(id)}>
                {open ? 'Close' : 'Open'}
              </Option>
              <Option onClick={() => changeOption('rename')}>Rename</Option>
              <Option onClick={() => changeOption('delete')}>Delete</Option>
            </Fragment>
          )}

        {option === 'rename' && (
          <div style={{ display: 'flex' }}>
            <form onSubmit={submitNewName}>
              <InputField
                error={error}
                type="text"
                value={newName}
                onChange={changeNewName}
                onClick={setErrorFalse}
                placeholder="type new name here"
              />
              <InputButton type="submit" value="Submit" />
            </form>
            <Option onClick={() => changeOption('')}>Cancel</Option>
          </div>
        )}

        {option === 'delete' && (
          <span>
            Are you sure you want to delete this file?
            <Option onClick={() => handleDelete()}>Yes</Option>
            <Option onClick={() => changeOption('')}>No</Option>
          </span>
        )}
      </Options>
    )
  }
}

export default connect(
  null,
  mapDispachToProps
)(ItemOptions)
