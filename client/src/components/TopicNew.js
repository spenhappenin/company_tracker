import React from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import { setFlash, } from '../actions/flash';
import { Button, Container, Form, Header, Input, } from 'semantic-ui-react';

class TopicNew extends React.Component {
  state = { body: '', category: '', title: '', };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleQuill = (value, name) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const { body, category, title, } = this.state;

    e.preventDefault();
    axios.post('/api/topics/new', { body, category, title })
      .then(res => {
        this.props.dispatch(setFlash('Topic added.', 'green'));
        this.props.history.push('/topics');
      })
      .catch(err => {
        this.props.dispatch(setFlash('Error. Please try again later.', 'red'));
      })
  };

  render() {
    return(
      <Container>
        <br />
        <Header as='h2'>Topic Form</Header>
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
          <Form.Field
            name='category'
            control={Input}
            label='Category'
            placeholder='Javascript'
            required
            onChange={this.handleChange}
          />
          <label>Body</label>
          <ReactQuill
            value={this.state.body}
            name='body'
            label='Body'
            placeholder='Topic info...'
            required
            onChange={(value) => this.handleQuill(value, 'body')}
          />
          <br />
          <Button type='submit'>Submit</Button> 
        </Form>
      </Container>
    );
  };
};

export default TopicNew;
