import React from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setFlash } from '../actions/flash';
import { Button, Container, Form, Header, Input, TextArea, } from 'semantic-ui-react';

class TopicEditForm extends React.Component {
  state = { body: '', category: '', setFormData: false, title: '', };

  componentDidMount() {
    this.setState({ topic: this.props.topics.find( t => t.id === parseInt(this.props.match.params.id)), });
  };

  componentDidUpdate() {
    const { topic: { body, category, title, }, setFormData, } = this.state;

    if (this.state.setFormData !== true) {
      this.setState({ body, category, title, setFormData: true, });
    }
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    const { dispatch, history, match, updateTopics, } = this.props;
    const { body, category, title, topic: { id, }, } = this.state;
    const topic = { body, category, id, title, };

    e.preventDefault();
    axios.put(`/api/topics/${id}/edit`, topic)
      .then(res => {
        dispatch(setFlash('Topic updated.', 'green'));
        updateTopics(topic);
        history.push('/topics');
      })
      .catch(err => {
        dispatch(setFlash('Error. Please try again later.', 'red'));
      })
  };

  handleQuill = (value, name) => {
    this.setState({ [name]: value });
  };

  render() {
    const { body, category, title, } = this.state;

    return (
      <Container>
        <br />
        <Header as='h1'>Edit Topic</Header>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Field
            name='title'
            control={Input}
            label='Title'
            placeholder='Cool Topic Title'
            required
            value={title}
            onChange={this.handleChange}
          />
          <Form.Field
            name='category'
            control={Input}
            label='Category'
            placeholder='Cool Category'
            required
            value={category}
            onChange={this.handleChange}
          />
          <label>Body</label>
          <ReactQuill
            value={body}
            name='body'
            label='Body'
            placeholder='Topic body...'
            required
            onChange={(value) => this.handleQuill(value, 'body')}
          />
          <br />
          <Button type='submit'>Submit</Button>
        </Form>
        <br />
        <br />
        <br />
      </Container>
    );
  };
};

export default connect()(TopicEditForm);
