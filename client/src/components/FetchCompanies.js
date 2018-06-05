import React from 'react';
import axios from 'axios';
import Companies from './Companies';
import ProtectedRoute from './ProtectedRoute';
import { setFlash, } from '../actions/flash';
import { Switch, } from 'react-router-dom';

class FetchCompanies extends React.Component {
  state = { companies: [], loaded: false };

  componentDidMount() {
    axios.get('/api/companies')
      .then(res => {
        this.setState({ companies: res.data });
      })
      .catch(res => {
        this.props.dispatch(setFlash('Error...', 'red'));
      })
  };

  render() {
    return(
      <Switch>
        <ProtectedRoute 
          exact 
          path='/companies' 
          component={Companies} 
          companies={this.state.companies} 
        />
      </Switch>
    )
  }
}

export default FetchCompanies;
