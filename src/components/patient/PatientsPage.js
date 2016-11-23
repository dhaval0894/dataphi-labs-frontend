import React, { Component, PropTypes } from 'react';

class PatientsPage extends Component {
  render() {
    return (
      <div>

        <header className="jumbotron">
            <h4 className="text-center">List Of Patients</h4>
        </header>

        <table className="table table-striped table-hover ">
          <thead>
            <tr className="info">
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Date Of Birth</th>
              <th>Gender</th>
              <th>Contact Number</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default PatientsPage;
