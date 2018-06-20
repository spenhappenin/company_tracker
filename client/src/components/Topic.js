import React from 'react';
import GenerateHtml from './GenerateHtml';
import styled from 'styled-components';
import { Link, } from 'react-router-dom';
import { Button, Container, Header, Icon, Segment, } from 'semantic-ui-react';

class Topic extends React.Component {
  state = { topic: null, };

  componentDidMount() {
    this.setState({ topic: this.props.topics.find( t => t.id === parseInt(this.props.match.params.id)) });
  };

  render() {
    const { handleDelete, } = this.props;
    const { topic, } = this.state;

    if (topic === null) return null;
    return(
      <Container>
        <br />
        <Header as='h2'>{topic.title}</Header>
        <br />
        <Field>
          <Header as='h5' style={{ marginBottom: 0, marginRight: '10px', }}>Category:</Header>
          <p>{topic.category}</p>
        </Field>
        <Header as='h5'>Topic Body:</Header>
        <Segment>
          {
            topic.body ?
              <GenerateHtml text={topic.body} />
              :
              <p>No topic body added...</p>
          }
        </Segment>
        <br />
        <Button.Group icon>
          <Link to={`/topics/${topic.id}/edit`}>
            <Button color='yellow'>
              <Icon name='pencil' /> Edit
            </Button>
          </Link>
          <Button color='red' onClick={() => handleDelete(topic.id)}>
            <Icon name='trash' /> Delete
          </Button>
        </Button.Group>
        <br />
        <br />
        <br />
      </Container>
    );
  }
};

const Field = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default Topic;
