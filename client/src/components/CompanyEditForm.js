import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setFlash } from '../actions/flash';
import { Button, Checkbox, Container, Form, Header, Input, TextArea, } from 'semantic-ui-react';

class CompanyEditForm extends React.Component {
  state = { title: '', description: '', location: '', position: '', position_details: '', applied: false, setFormData: false, };

  componentDidMount() {
    this.setState({ company: this.props.companies.find( c => c.id === parseInt(this.props.match.params.id) ), });
  };

  componentDidUpdate() {
    const { company: { title, description, location, position, position_details, applied, }, setFormData, } = this.state;

    if( this.state.setFormData !== true ) {
      this.setState({ title, description, location, position, position_details, applied, setFormData: true, });
    }
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  toggleCheckbox = () => this.setState({ applied: !this.state.applied });

  handleSubmit = (e) => {
    const { title, description, location, position, position_details, applied, company: { id } } = this.state;

    e.preventDefault();
    axios.put(`/api/companies/${id}/edit`, { title, description, location, position, position_details: position_details, applied })
      .then( res => {
        this.props.dispatch(setFlash('Company added.', 'green'));
        this.props.history.push('/companies');
      })
      .catch( err => {
        this.props.dispatch(setFlash('Error. Please try again later.', 'red'));
      })
  };

  render() {
    const { title, description, location, position, position_details, applied, } = this.state;

    return (
      <Container>
        <br />
        <Header as='h1'>Edit Company</Header>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Field
            name='title'
            control={Input}
            label='Title'
            placeholder='Cool Company Name'
            required
            value={title}
            onChange={this.handleChange}
          />
          <Form.Field
            name='description'
            control={TextArea}
            label='Description'
            placeholder='The company is all about culture and...'
            required
            value={description}
            onChange={this.handleChange}
          />
          <Form.Field
            name='location'
            control={Input}
            label='Location'
            placeholder='Lehi, UT'
            required
            value={location}
            onChange={this.handleChange}
          />
          <Form.Field
            name='position'
            control={Input}
            label='Position'
            placeholder='Front End Developer'
            value={position}
            onChange={this.handleChange}
          />
          <Form.Field
            name='position_details'
            control={TextArea}
            label='Position Details'
            placeholder='Ruby on Rails job that...'
            value={position_details}
            onChange={this.handleChange}
          />
          <Form.Field>
            <Checkbox
              name='applied'
              onChange={this.toggleCheckbox}
              label='Applied'
              checked={applied}
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    );
  };
};

export default connect()(CompanyEditForm);
