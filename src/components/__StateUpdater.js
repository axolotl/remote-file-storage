import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
import { Text } from '../styles/TextStyles'

const mapStateToProps = state => ({
  displayedState: state.displayedState
})

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

class StateUpdater extends Component {
  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.updateState(this.state.value)
    this.setState({ value: '' })
  }

  render() {
    const state = this.props.displayedState
    const { handleChange, handleSubmit } = this
    const { value } = this.state

    return (
      <div>
        <Text>State: {state}</Text>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="type new state here"
          />
          <input type="submit" value="Submit" />
        </form>
        <br />
        <button type="submit" onClick={this.props.doubleState}>
          Double state
        </button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispachToProps
)(StateUpdater)
