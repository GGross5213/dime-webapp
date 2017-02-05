import React from 'react'

const header = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo"><img src="img/DimeLogoWhiteSmall.png" alt="Dime, Just Give A Dime"></img></a>
      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="fa fa-bars" aria-hidden="true"></i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/charities">Charities</a></li>
        <li><a href="/transactions">History</a></li>
        <li><a href="/donate">Donate</a></li>
        <li><a href="mobile.html"><i className="fa fa-cog" aria-hidden="true"></i></a></li>
      </ul>
      <ul className="side-nav" id="mobile-demo">
        <li><a href="/charities">Charities</a></li>
        <li><a href="/transactions">History</a></li>
        <li><a href="/donate">Donate</a></li>
        <li><a href="mobile.html"><i className="fa fa-cog" aria-hidden="true"></i></a></li>
      </ul>
    </div>
  </nav>
);

export default header
