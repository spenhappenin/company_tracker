import React from 'react';
import axios from 'axios';
import { setFlash, } from '../actions/flash';
import { Container, Header, } from 'semantic-ui-react';

class Companies extends React.Component {

  displayCompanies = () => {
    if (this.props.companies.length <= 0)
      return <Header as='h3'>You have no companies. Go add some!</Header>

    return this.props.companies.map( (c, i) => (
      <Header as='h4'>{ c.title }</Header>
    ))
  }

  render() {
    return(
      <Container>
        <br />
        <Header as='h1'>Companies</Header>
        { this.displayCompanies() }
      </Container>
    )
  }
}

export default Companies;
