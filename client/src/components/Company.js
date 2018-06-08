import React from 'react';
import GenerateHtml from './GenerateHtml';
import { Link, } from 'react-router-dom';
import { Button, Container, Header, Icon, } from 'semantic-ui-react';

class Company extends React.Component {
  state = { company: null, };

  componentDidMount() {
    this.setState({ company: this.props.companies.find( c => c.id === parseInt(this.props.match.params.id)) });
  };

  displayAppliedInfo = (company) => {
    if (company.applied) {
      return(
        <div>
          <Header as='h5'>Position:</Header>
          <p>{ company.position }</p>
          <Header as='h5'>Position Details:</Header>
          <GenerateHtml text={company.position_details} />
        </div>
      );
    };
  };

  render() {
    const { company } = this.state;
    const { handleDelete, } = this.props;

    if (company === null) return null;
    return(
      <Container>
        <br />
        <Header as='h2'>{ company.title }</Header>
        <Header as='h5'>Company Description:</Header>
        <GenerateHtml text={company.description} />
        <Header as='h5'>Location:</Header>
        <p>{ company.location }</p>
        <p>Applied? { company.applied ? <Icon name='check' color='green' size='large' /> : <Icon name='delete' color='red' size='large' /> }</p>
        { this.displayAppliedInfo(company) }
        <br />
        <Button.Group icon>
          <Link to={`/companies/${company.id}/edit`}>
            <Button color='yellow'>
              <Icon name='pencil' /> Edit
            </Button>
          </Link>
          <Button color='red' onClick={() => handleDelete(company.id)}>
            <Icon name='trash' /> Delete
          </Button>
        </Button.Group>
      </Container>
    );
  };
};

export default Company;
