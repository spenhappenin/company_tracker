import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { setFlash, } from '../actions/flash';
import { Container, Header, } from 'semantic-ui-react';

class Companies extends React.Component {

  displayCompanies = () => {
    if (this.props.companies.length <= 0)
      return <Header as='h3'>You have no companies. Go add some!</Header>

    return this.props.companies.map( (c, i) => (
      <li key={i}>
        <Link to={`/companies/${c.id}`}>{ c.title }</Link>
      </li>
    ))
  }

  render() {
    return(
      <Container>
        <br />
        <Header as='h1'>Companies</Header>
        <Link to='/companies/new'>Add Company</Link>
        <ul>
          { this.displayCompanies() }
        </ul>
      </Container>
    )
  }
}

export default Companies;
