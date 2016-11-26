import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import Validation from './../common/validation';

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

    this.calculateAge = this.calculateAge.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  calculateAge() {
    if (this.state.dob) {
        let dob = this.state.dob;
        let age = Math.ceil(moment().diff(dob, 'years', true));
        console.log(age);
        this.setState({ age: age });
    }
  }

  handleChange(event) {
    let input_name = event.target.name;
    let value = event.target.value;
    this.setState({ [input_name] : value });
  }

  handleAdd(event) {
    event.preventDefault();
    let self = this;

    $.ajax({
      url: 'http://api.dhavalpurohit.com/api/patients',
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

            <Validation.components.Form className="form-horizontal" onSubmit={this.handleAdd}>
              <fieldset>
                <div className="form-group">
                  <label className="col-lg-2 control-label">First Name</label>
                  <div className="col-lg-9">
                    <Validation.components.Input type="text"
                      className="form-control"
                      name="first_name"
                      placeholder="Enter First Name"
                      value={this.state.first_name}
                      onChange={this.handleChange}
                      validations={['required', 'checkString']} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-lg-2 control-label">Last Name</label>
                  <div className="col-lg-9">
                    <Validation.components.Input type="text"
                      className="form-control"
                      name="last_name"
                      placeholder="Enter Last Name"
                      value={this.state.last_name}
                      onChange={this.handleChange}
                      validations={['required', 'checkString']} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-lg-2 control-label">Date Of Birth</label>
                  <div className="col-lg-9">
                    <Validation.components.Input type="date"
                      className="form-control"
                      name="dob"
                      placeholder="Enter Date Of Birth"
                      value={this.state.dob}
                      onChange={this.handleChange}
                      onBlur={this.calculateAge}
                      validations={['required', 'checkDate']} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-lg-2 control-label">Gender</label>
                  <div className="col-lg-9">
                    <Validation.components.Select className="form-control"
                      name="gender"
                      value={this.state.gender}
                      onChange={this.handleChange}
                      value=""
                      validations={['required']}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Validation.components.Select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-lg-2 control-label">Contact No.</label>
                  <div className="col-lg-9">
                    <Validation.components.Input type="text"
                      className="form-control"
                      name="mobile"
                      placeholder="Enter Contact Number"
                      value={this.state.mobile}
                      onChange={this.handleChange}
                      validations={['required', 'checkNumber', 'checkLength']} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-lg-2 control-label">Other Info</label>
                  <div className="col-lg-9">
                    <Validation.components.Textarea className="form-control"
                      rows="3"
                      name="other_info"
                      placeholder="Enter Info"
                      value={this.state.other_info}
                      onChange={this.handleChange}
                      validations={['required']} ></Validation.components.Textarea>
                  </div>
                </div>

                <div className="form-group">
                  <div className="text-right col-lg-6">
                    <Validation.components.Button type="submit" className="btn btn-sm btn-success">Submit</Validation.components.Button>
                  </div>
                </div>

              </fieldset>
             </Validation.components.Form>
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
