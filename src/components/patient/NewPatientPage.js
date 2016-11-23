import React, { Component } from 'react';

class NewPatientPage extends Component {
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

            <form className="form-horizontal">
              <fieldset>
                <div className="form-group">
                  <label for="firstName" className="col-lg-2 control-label">First Name</label>
                  <div className="col-lg-9">
                    <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" />
                  </div>
                </div>

                <div className="form-group">
                  <label for="lastName" className="col-lg-2 control-label">Last Name</label>
                  <div className="col-lg-9">
                    <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" />
                  </div>
                </div>

                <div className="form-group">
                  <label for="dob" className="col-lg-2 control-label">Date Of Birth</label>
                  <div className="col-lg-9">
                    <input type="date" className="form-control" id="dob" placeholder="Enter Date Of Birth" />
                  </div>
                </div>

                <div className="form-group">
                  <label for="gender" className="col-lg-2 control-label">Gender</label>
                  <div className="col-lg-9">
                    <select className="form-control" id="select">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label for="mobile" className="col-lg-2 control-label">Contact No.</label>
                  <div className="col-lg-9">
                    <input type="text" className="form-control" id="mobile" placeholder="Enter Contact Number" />
                  </div>
                </div>

                <div className="form-group">
                  <label for="otherInfo" className="col-lg-2 control-label">Other Info</label>
                  <div className="col-lg-9">
                    <textarea className="form-control" rows="3" id="textArea" placeholder="Enter Info"></textarea>
                  </div>
                </div>

                <div className="form-group">
                  <div className="text-right col-lg-6">
                    <button type="submit" className="btn btn-sm btn-success">Submit</button>
                  </div>
                  <div className="col-lg-6">
                    <button type="reset" className="btn btn-sm btn-danger">Cancel</button>
                  </div>

                </div>

              </fieldset>
            </form>

          </div>
        </div>
    </div>
    );
  }
}

export default NewPatientPage;
