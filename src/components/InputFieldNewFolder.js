import React, { Component } from 'react'
import { InputField, InputButton } from '../styles/FormStyles'

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
        <InputField
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="type new folder name here"
        />
        <InputButton type="submit" value="Submit" />
      </form>
    )
  }
}

export default NewFolder