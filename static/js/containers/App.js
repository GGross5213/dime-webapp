import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Test from '../components/test.component.js'

class App extends Component {
  render(){
    return (
      <div>
        {this.props.children}
        <Test />
      </div>
    );
  }
}

export default App
