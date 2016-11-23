import React, {PropTypes} from 'react';
import Patient from './Patient';

const PatientTable = (props) => {
  const patients = props.patients

  const patientsList = patients.map((patient) => {
      return (
        <Patient patient={patient} key={patient.id} />
      );
  });

  return (
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
        {patientsList}
      </tbody>
    </table>

  );
};

PatientTable.propTypes = {
  patients: PropTypes.array.isRequired
}

export default PatientTable;
