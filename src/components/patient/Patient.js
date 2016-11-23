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
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  age: PropTypes.number,
  dob: PropTypes.string,
  mobile: PropTypes.string,
  other_info: PropTypes.string
};

export default Patient;
