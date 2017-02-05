import React, {Component} from 'react'
import {connect} from 'react-redux'

class Donate extends Component {
  render(){
    return (
      <div>
        <div className="donate-overview valign-wrapper">
          <div className="col s12 full-width">
            <h1>Every dime counts</h1>
            <h3 className="pad-bottom">All proceeds given will go to <a href="/charities">your charities</a>.</h3>
            <a href="#" className="button-light">Donate $1</a>
            <a href="#" className="button-light">Donate $5</a>
            <a href="#" className="button-light">Donate $20</a>
            <a href="#" className="button-light">Donate Other</a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Donate)
