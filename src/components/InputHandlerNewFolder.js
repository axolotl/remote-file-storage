import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
import { InputField, InputButton } from '../styles/FormStyles'

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

class NewFolder extends Component {
  state = {
    value: '',
    error: false
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { createItemDB, id, removeInputField } = this.props
    const { value } = this.state

    if (value.length > 0) {
      createItemDB(this.state.value, 'folder', id)
      removeInputField(id)
    } else {
      this.setState({ error: true })
    }
  }

  setErrorFalse = () => {
    this.setState({ error: false })
  }

  render() {
    const { value } = this.props
    const { handleChange, handleSubmit, setErrorFalse } = this
    const { error } = this.state

    return (
      <form onSubmit={handleSubmit}>
        <InputField
          error={error ? true : false}
          type="text"
          value={value}
          onClick={() => setErrorFalse()}
          onChange={handleChange}
          placeholder={error ? 'enter name here' : ''}
        />
        <InputButton type="submit" value="Submit" />
      </form>
    )
  }
}

export default connect(
  null,
  mapDispachToProps
)(NewFolder)
