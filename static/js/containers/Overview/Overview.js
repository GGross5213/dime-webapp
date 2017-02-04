import React, {Component} from 'react'
import {connect} from 'react-redux'

class Overview extends Component {
  render(){
    return (
      <div>
        Im in overview
      </div>
    );
  }
}

export default connect()(Overview)
