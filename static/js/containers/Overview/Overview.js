import React, {Component} from 'react'
import {connect} from 'react-redux'
//import {Doughnut} from 'react-chartjs'
var Doughnut = require('react-chartjs').Doughnut;
var data = [
  {
      value: 300,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Red"
  },
  {
      value: 50,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Green"
  },
  {
      value: 100,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Yellow"
  },
  {
      value: 40,
      color: "#949FB1",
      highlight: "#A8B3C5",
      label: "Grey"
  },
  {
      value: 120,
      color: "#4D5360",
      highlight: "#616774",
      label: "Dark Grey"
  }
];

class Overview extends Component {
  render(){
    return (
      <div>
        <div className="overview valign-wrapper">
          <div className="col s12 full-width">
            <h2>You've given</h2>
            <h1 className="">$842.92</h1>
            <h3><a href="#">$109.86 this week <i className="fa fa-arrow-right" aria-hidden="true"></i></a></h3>
            <h2>provided <span className="bold">412</span> meals</h2>
            <h2>cleaned <span className="bold">1,318</span> gallons of water</h2>
            <h2>helped <span className="bold">72</span> pets find forever homes</h2>
          </div>
        </div>
        <div className="row row-padded">

          <div className="section-header">
            <h2 className="fancy"><span>Featured Charites</span></h2>
          </div>

          <div className="col s12 m6 l4 card-padding">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="img/africa.jpg"></img>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Blood Water Mission <i className="fa fa-chevron-up" aria-hidden="true"></i></span>
                <p><a href="#">Add Charity</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Blood Water Mission <i className="fa fa-times" aria-hidden="true"></i></span>
                <p>Blood:Water is an equipping agency that partners with African grassroots organizations to address the HIV/AIDS and water crises. We do this by identifying Africa’s hidden heroes and coming alongside their vision for change. Through technical, financial, and organizational support, we expand the reach and effectiveness of African civil society organizations and the communities they serve.</p>
                <a href="#" className="button">Add Charity</a>
              </div>
            </div>
          </div>

          <div className="col s12 m6 l4 card-padding">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="img/humaneSociety.jpg"></img>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Humane Society <i className="fa fa-chevron-up" aria-hidden="true"></i></span>
                <p><a href="#">Add Charity</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Humane Society <i className="fa fa-times" aria-hidden="true"></i></span>
                <p>Blood:Water is an equipping agency that partners with African grassroots organizations to address the HIV/AIDS and water crises. We do this by identifying Africa’s hidden heroes and coming alongside their vision for change. Through technical, financial, and organizational support, we expand the reach and effectiveness of African civil society organizations and the communities they serve.</p>
                <a href="#" className="button">Add Charity</a>
              </div>
            </div>
          </div>

          <div className="col s12 m6 l4 card-padding">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="img/charityBack.jpg"></img>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Charity Water <i className="fa fa-chevron-up" aria-hidden="true"></i></span>
                <p><a href="#">Add Charity</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Charity Water <i className="fa fa-times" aria-hidden="true"></i></span>
                <p>It’s hard not to think about water today. In the western world, we face growing concerns about our stewardship of the world’s most precious resource. There’s talk of shortages, evidence of reservoirs and aquifers drying up, and of course, plenty of people who simply don’t care.</p>
                <a href="#" className="button">Add Charity</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-padded">
          <div className="section-header">
            <h2 className="fancy"><span>Transaction History</span></h2>
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
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect()(Overview)
