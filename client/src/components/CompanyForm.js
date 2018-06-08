import React from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setFlash } from '../actions/flash';
import { Button, Checkbox, Container, Form, Header, Input, TextArea, } from 'semantic-ui-react';

class CompanyForm extends React.Component {
  state = { title: '', description: '', location: '', position: '', positionDetails: '', applied: '', };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleQuill = (value, name) => {
    this.setState({ [name]: value });
  };

  toggleCheckbox = () => this.setState({ applied: !this.state.applied });

  handleSubmit = (e) => {
    const { title, description, location, position, positionDetails, applied, } = this.state;

    e.preventDefault();
    axios.post('/api/companies/new', { title, description, location, position, position_details: positionDetails, applied })
      .then( res => {
        this.props.dispatch(setFlash('Company added.', 'green'));
        this.props.history.push('/companies');
      })
      .catch( err => {
        this.props.dispatch(setFlash('Error. Please try again later.', 'red'));
      })
  };

  render() {
    return(
      <Container>
        <br />
        <Header as='h1'>New Company</Header>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Field
            name='title'
            control={Input}
            label='Title'
            placeholder='Cool Company Name'
            required
            onChange={this.handleChange}
          />
          <label>Description</label>
          <ReactQuill 
            value={this.state.description}
            name='description'
            label='Description'
            placeholder='The company is all about culture and...'
            required
            onChange={(value) => this.handleQuill(value, 'description')}
          />
          <br />
          <Form.Field
            name='location'
            control={Input}
            label='Location'
            placeholder='Lehi, UT'
            required
            onChange={this.handleChange}
          />
          <Form.Field
            name='position'
            control={Input}
            label='Position'
            placeholder='Front End Developer'
            onChange={this.handleChange}
          />
          <label>Position Details</label>
          <ReactQuill
            value={this.state.positionDetails}
            name='positionDetails'
            label='Description'
            placeholder='Ruby on Rails job that...'
            required
            onChange={(value) => this.handleQuill(value, 'positionDetails')}
          />
          <br />
          <Form.Field>
            <Checkbox 
              name='applied'
              onChange={this.toggleCheckbox}
              label='Applied' 
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    );
  };
};

export default connect()(CompanyForm);
