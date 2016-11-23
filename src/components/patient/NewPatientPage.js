import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import $ from 'jquery';
import { browserHistory } from 'react-router'

class NewPatientPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      age: '',
      dob: '',
      mobile: '',
      other_info: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.checkRoute = this.checkRoute.bind(this);
    this.calculateAge = this.calculateAge.bind(this);
  }

  calculateAge() {
    if (this.state.dob) {
        let dob = this.state.dob;
        let age = Math.ceil(moment().diff(dob, 'years', true));
        console.log(age);
        this.setState({ age: age });
    }
  }

  checkRoute() {
    browserHistory.push('/patients');
  }

  handleChange(event) {
    let input_name = event.target.name;
    let value = event.target.value;
    console.log(value);
    this.setState({ [input_name] : value });
  }

  handleAdd(event) {
    event.preventDefault();
    let self = this;

    if (self.validForm()) {
      $.ajax({
        url: 'http://localhost:8000/api/patients',
        method: 'POST',
        data: { patient: self.state },
        success: (data) => {
          self.setState(self.state);
          browserHistory.push('/patients');
        },
        error: (xhr, status, error) => {
          alert('Cannot Add a new Record', error);
        }
      });
    }
    else {
      alert('Please fill all the fields');
    }
  }

  validForm() {
    if (this.state.first_name && this.state.last_name && this.state.age && this.state.dob && this.state.gender && this.state.mobile && this.state.other_info) {
      return true;
    }
    else {
      return false;
    }
  }

  render() {
    return (
      <div>

        <header className="jumbotron">
            <h4 className="text-center">Patient Details Form</h4>
        </header>

        <div className="panel panel-info">
          <div className="panel-heading">
            Enter Details
          </div>
          <div className="panel-body">

            <form className="form-horizontal" onSubmit={this.handleAdd}>
              <fieldset>
                <div className="form-group">
                  <label className="col-lg-2 control-label">First Name</label>
                  <div className="col-lg-9">
                    <input type="text"
                      className="form-control"
                      name="first_name"
                      placeholder="Enter First Name"
                      value={this.state.first_name}
                      onChange={this.handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-lg-2 control-label">Last Name</label>
                  <div className="col-lg-9">
                    <input type="text"
                      className="form-control"
                      name="last_name"
                      placeholder="Enter Last Name"
                      value={this.state.last_name}
                      onChange={this.handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-lg-2 control-label">Date Of Birth</label>
                  <div className="col-lg-9">
                    <input type="date"
                      className="form-control"
                      name="dob"
                      placeholder="Enter Date Of Birth"
                      value={this.state.dob}
                      onChange={this.handleChange}
                      onBlur={this.calculateAge} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-lg-2 control-label">Gender</label>
                  <div className="col-lg-9">
                    <select className="form-control"
                      name="gender"
                      value={this.state.gender}
                      onChange={this.handleChange}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-lg-2 control-label">Contact No.</label>
                  <div className="col-lg-9">
                    <input type="text"
                      className="form-control"
                      name="mobile"
                      placeholder="Enter Contact Number"
                      value={this.state.mobile}
                      onChange={this.handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-lg-2 control-label">Other Info</label>
                  <div className="col-lg-9">
                    <textarea className="form-control"
                      rows="3"
                      name="other_info"
                      placeholder="Enter Info"
                      value={this.state.other_info}
                      onChange={this.handleChange}></textarea>
                  </div>
                </div>

                <div className="form-group">
                  <div className="text-right col-lg-6">
                    <button type="submit" className="btn btn-sm btn-success">Submit</button>
                  </div>
                </div>

              </fieldset>
            </form>
            <div className="text-right col-lg-6">
              <button className="btn btn-sm btn-danger" onClick={this.checkRoute}>cancel</button>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

NewPatientPage.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  age: PropTypes.number,
  dob: PropTypes.string,
  gender: PropTypes.string,
  mobile: PropTypes.string,
  other_info: PropTypes.string,
  router: PropTypes.object.isRequired
};

export default NewPatientPage;
