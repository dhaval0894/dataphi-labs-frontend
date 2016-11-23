import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App';
import PatientsPage from './components/patient/PatientsPage';
import NewPatientPage from './components/patient/NewPatientPage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={PatientsPage} />
    <Route path="patients" component={PatientsPage} />
    <Route path="patient/new" component={NewPatientPage} />
  </Route>
);
