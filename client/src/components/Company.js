import React, { Fragment, } from 'react';
import GenerateHtml from './GenerateHtml';
import { Link, } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Container, Header, Icon, Segment, } from 'semantic-ui-react';

class Company extends React.Component {
  state = { company: null, };

  componentDidMount() {
    this.setState({ company: this.props.companies.find( c => c.id === parseInt(this.props.match.params.id)) });
  };

  displayAppliedInfo = (company) => {
    if (company.applied) {
      return(
        <Fragment>
          <Field>
            <Header as='h5' style={{ marginBottom: 0, marginRight: '10px', }}>Position:</Header>
            <p>{ company.position }</p>
          </Field>
          <Header as='h5' style={{ marginBottom: 0, marginRight: '10px', }}>Position Details:</Header>
          <Segment>
            <GenerateHtml text={company.position_details} />
          </Segment>
        </Fragment>
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
        <Segment>
          <GenerateHtml text={company.description} />
        </Segment>
        <Field>
          <Header as='h5' style={{ marginBottom: 0, marginRight: '10px', }}>Location:</Header>
          <p>{ company.location }</p>
        </Field>
        <br />
        <Field>
          <p><b>Applied?</b> { company.applied ? <Icon name='check' color='green' size='large' /> : <Icon name='delete' color='red' size='large' /> }</p>
        </Field>
        <br />
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
        <br />
        <br />
        <br />
      </Container>
    );
  };
};

const Field = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default Company;
