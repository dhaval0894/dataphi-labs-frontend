import React, {Component} from 'react';
import PatientTable from './PatientTable';
import SearchForm from './SearchForm';
import $ from 'jquery';

class PatientsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    let self = this;

    $.ajax({
      url: 'http://api.dhavalpurohit.com/api/patients',
      success: function(data) {
        self.setState({ patients: data });
      },
      error: function(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    });
  }

  // handleAdd(patient) {
  //   let patients = this.state.patients;
  //   patients.push(patient);
  //   this.setState({ patients: patients });
  // }

  handleSearch(patients) {
    this.setState({ patients: patients});
  }

  render() {
    return (
      <div>

        <header className="jumbotron">
          <h4 className="text-center">List Of Patients</h4>
        </header>

        <div className="row search-panel">
          <div className="col-md-3">
            <SearchForm handleSearch={this.handleSearch}/>
          </div>
        </div>

        <PatientTable patients={this.state.patients} />

      </div>
    );
  }
}

export default PatientsPage;
