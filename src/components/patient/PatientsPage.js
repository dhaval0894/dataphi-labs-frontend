import React, {Component} from 'react';
import PatientTable from './PatientTable';
import $ from 'jquery';

class PatientsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: []
    };
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    let self = this;

    $.ajax({
      url: 'http://localhost:8000/api/patients',
      success: function(data) {
        self.setState({ patients: data });
      },
      error: function(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    });
  }

  render() {
    return (
      <div>

        <header className="jumbotron">
            <h4 className="text-center">List Of Patients</h4>
        </header>

        <PatientTable patients={this.state.patients} />
      </div>
    );
  }
}

export default PatientsPage;
