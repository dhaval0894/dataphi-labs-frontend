import React from 'react';
import { Link, IndexLink } from 'react-router';

const header = () => {
  return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <IndexLink to="/" className="navbar-brand">Dataphi Labs</IndexLink>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                      <li>
                          <Link to="/patients" activeClassName="active">Patients</Link>
                      </li>
                      <li>
                          <Link to="/patient/new" activeClassName="active">New Patient</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>

  );
};

export default header;
