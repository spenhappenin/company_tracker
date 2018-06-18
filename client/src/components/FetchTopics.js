import React from 'react';
import axios from 'axios';
import ProtectedRoute from './ProtectedRoute';
import Topic from './Topic';
import Topics from './Topics';
import { setFlash, } from '../actions/flash';
import { setHeaders, } from '../actions/headers';
import { Switch, } from 'react-router-dom';

class FetchTopics extends React.Component {
  state = { topics: [], loaded: false, };

  componentDidMount() {
    axios.get('/api/topics')
      .then( res => {
        this.setState({ topics: res.data, loaded: true });
      })
      .catch( res => {
        this.props.dispatch(setFlash('Error...', 'red'));
      })
  };

  updateCompanies = (company) => {
    // const compare = (a, b) => {
    //   const titleA = a.title.toUpperCase();
    //   const titleB = b.title.toUpperCase();
    //   let comparison = 0;
    //   if (titleA > titleB) {
    //     comparison = 1;
    //   } else if (titleA < titleB) {
    //     comparison = -1;
    //   }
    //   return comparison;
    // };

    // let companies = this.state.companies.map(c => {
    //   if (c.id === company.id) {
    //     return company;
    //   } else {
    //     return c;
    //   }
    // })
    // companies = companies.sort(compare);
    // this.setState({ companies });
  };

  handleDelete = (id) => {
    // let confirm = window.confirm('Are you sure you want to delete?');
    // if (confirm) {
    //   axios.delete(`/api/companies/${id}`)
    //     .then(res => {
    //       this.props.dispatch(setFlash('Company Deleted', 'green'));
    //       this.props.dispatch(setHeaders(res.headers));
    //       this.setState({ companies: this.state.companies.filter(c => c.id !== id) });
    //       this.props.history.push('/companies');
    //     })
    //     .catch(err => {
    //       this.props.dispatch(setFlash('Error deleting company...', 'red'));
    //       this.props.dispatch(setHeaders(err.headers))
    //     });
    // }
  };

  render() {
    if (!this.state.loaded) return null;
    return (
      <Switch>
        <ProtectedRoute
          exact
          path='/topics'
          component={Topics}
          topics={this.state.topics}
        />
        <ProtectedRoute
          exact
          path='/topics/:id'
          component={Topic}
          topics={this.state.topics}
          handleDelete={this.handleDelete}
        />
        {/* <ProtectedRoute
          exact
          path='/companies/:id/edit'
          component={CompanyEditForm}
          updateCompanies={this.updateCompanies.bind(this)}
          companies={this.state.companies}
        /> */}
      </Switch>
    )
  }
}

export default FetchTopics;
