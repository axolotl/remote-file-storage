import React, { Component } from 'react'

class NewFolder extends Component {
  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { createItemDB, id, removeInputField } = this.props 
    createItemDB(this.state.value, 'folder', id)
    removeInputField(id)
  }

  render() {
    const { value } = this.props 
    const { handleChange, handleSubmit } = this

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="type new folder name here"
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default NewFolder