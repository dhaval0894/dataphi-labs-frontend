import React, {PropTypes} from 'react';
import moment from 'moment';

const Patient = (props) => {
  const patient = props.patient;

  return (
    <tr>
      <td>{patient.id}</td>
      <td>{patient.first_name}</td>
      <td>{patient.last_name}</td>
      <td>{patient.age}</td>
      <td>{moment(patient.dob).format('DD-MMM-YYYY')}</td>
      <td>{patient.gender}</td>
      <td>{patient.mobile}</td>
    </tr>
  );
}

Patient.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  dob: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  other_info: PropTypes.string.isRequired
};

export default Patient;
