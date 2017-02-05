import React, {Component} from 'react'
import {connect} from 'react-redux'

class Transaction extends Component {
  render(){
    return (
      <div>
        <div className="overview valign-wrapper">
          <div className="col s12 full-width">
            <h1>History:</h1>
            <h2>Total given: <span className="bold">$842.92</span></h2>
            <h2>This week: <span className="bold">$109.86</span></h2>
            <h2>Meals provided: <span className="bold">412</span></h2>
            <h2>Gallons of water cleaned: <span className="bold">1,318</span></h2>
            <h2>Pet homes helped find: <span className="bold">72</span></h2>
          </div>
        </div>

        <div className="section-header">
          <h2 className="fancy"><span>Recent Transactions</span></h2>
        </div>

        <table>
          <thead>
            <tr>
                <th data-field="id">Transaction</th>
                <th data-field="name">Date</th>
                <th data-field="name">Original Purchase Cost</th>
                <th data-field="price">Amount Donated</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Purchase From Walmart</td>
              <td>01/21/2017</td>
              <td>$4.13</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Purchase From Trader Joes</td>
              <td>01/15/2017</td>
              <td>$14.24</td>
              <td>$0.76</td>
            </tr>
            <tr>
              <td>Purchase From Walmart</td>
              <td>01/11/2017</td>
              <td>$4.13</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Purchase From Trader Joes</td>
              <td>01/10/2017</td>
              <td>$14.24</td>
              <td>$0.76</td>
            </tr>
            <tr>
              <td>Purchase From Walmart</td>
              <td>01/10/2017</td>
              <td>$4.13</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Purchase From Trader Joes</td>
              <td>01/07/2017</td>
              <td>$14.24</td>
              <td>$0.76</td>
            </tr>
            <tr>
              <td>Purchase From Walmart</td>
              <td>01/11/2017</td>
              <td>$4.13</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Purchase From Trader Joes</td>
              <td>01/10/2017</td>
              <td>$14.24</td>
              <td>$0.76</td>
            </tr>
            <tr>
              <td>Purchase From Walmart</td>
              <td>01/10/2017</td>
              <td>$4.13</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Purchase From Trader Joes</td>
              <td>01/07/2017</td>
              <td>$14.24</td>
              <td>$0.76</td>
            </tr>
            <tr>
              <td>Purchase From Walmart</td>
              <td>01/11/2017</td>
              <td>$4.13</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Purchase From Trader Joes</td>
              <td>01/10/2017</td>
              <td>$14.24</td>
              <td>$0.76</td>
            </tr>
            <tr>
              <td>Purchase From Walmart</td>
              <td>01/10/2017</td>
              <td>$4.13</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Purchase From Trader Joes</td>
              <td>01/07/2017</td>
              <td>$14.24</td>
              <td>$0.76</td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default connect()(Transaction)
