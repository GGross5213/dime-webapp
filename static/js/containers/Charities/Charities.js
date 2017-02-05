import React, {Component} from 'react'
import {connect} from 'react-redux'

class Charities extends Component {
  render(){
    return (
      <div>
        <div className="overview valign-wrapper">
          <div className="row full-width row-padded">
            <h1 className="pad-bottom">You're charities</h1>

            <div className="col s12 m6 l4 card-padding">
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src="img/africa.jpg"></img>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">Blood Water Mission <i className="fa fa-chevron-up" aria-hidden="true"></i></span>
                  <p><a href="#">Already Added</a></p>
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
                  <p><a href="#">Already Added</a></p>
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
                  <p><a href="#">Already Added</a></p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Charity Water <i className="fa fa-times" aria-hidden="true"></i></span>
                  <p>It’s hard not to think about water today. In the western world, we face growing concerns about our stewardship of the world’s most precious resource. There’s talk of shortages, evidence of reservoirs and aquifers drying up, and of course, plenty of people who simply don’t care.</p>
                  <a href="#" className="button">Add Charity</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-padded">

          <div className="section-header">
            <h2 className="fancy"><span>Find More Charities</span></h2>
          </div>
          <input type="text" name="search" className="" placeholder="Search for a charity.."></input>


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

        </div>
      </div>
    );
  }
}

export default connect()(Charities)
