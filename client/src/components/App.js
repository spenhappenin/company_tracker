import React from 'react';
import AuthRoute from './AuthRoute';
import CompanyForm from './CompanyForm';
import FetchCompanies from './FetchCompanies';
import FetchUser from './FetchUser';
import Flash from './Flash';
import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';
import NoMatch from './NoMatch';
import ProtectedRoute from './ProtectedRoute';
import Register from './Register';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <ProtectedRoute exact path='/companies' component={FetchCompanies} />
            <ProtectedRoute exact path='/companies/new' component={CompanyForm} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
