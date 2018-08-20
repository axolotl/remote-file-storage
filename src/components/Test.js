import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

class Test extends Component {
  state = {}

  render() {
    return (
      <p>test here</p>
    )
  }
}

export default connect(
  null,
  mapDispachToProps
)(Test)