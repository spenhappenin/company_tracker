import React from 'react';
import axios from 'axios';
import Companies from './Companies';
import Company from './Company';
import CompanyEditForm from './CompanyEditForm';
import CompanyForm from './CompanyForm';
import ProtectedRoute from './ProtectedRoute';
import { setFlash, } from '../actions/flash';
import { setHeaders, } from '../actions/headers';
import { Switch, } from 'react-router-dom';

class FetchCompanies extends React.Component {
  state = { companies: [], loaded: false, };

  componentDidMount() {
    axios.get('/api/companies')
      .then(res => {
        this.setState({ companies: res.data, loaded: true });
      })
      .catch(res => {
        this.props.dispatch(setFlash('Error...', 'red'));
      })
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   debugger
  //   return true
  // };

  handleDelete = (id) => {
    axios.delete(`/api/companies/${id}`)
      .then( res => {
        this.props.dispatch(setFlash('Company Deleted', 'green'));
        this.props.dispatch(setHeaders(res.headers));
        this.props.history.push('/companies');
      })
      .catch( err => {
        this.props.dispatch(setFlash('Error deleting company...', 'red'));
        this.props.dispatch(setHeaders(err.headers))
      });
  };

  render() {
    if ( !this.state.loaded ) return null;
    return(
      <Switch>
        <ProtectedRoute 
          exact 
          path='/companies' 
          component={Companies} 
          companies={this.state.companies} 
        />
        <ProtectedRoute
          exact
          path='/companies/:id'
          component={Company}
          companies={this.state.companies}
          handleDelete={this.handleDelete}
        />
        <ProtectedRoute
          exact
          path='/companies/:id/edit'
          component={CompanyEditForm}
          companies={this.state.companies}
        />
      </Switch>
    )
  }
}

export default FetchCompanies;
