import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, } from 'react-router-dom';
import { setFlash, } from '../actions/flash';
import { Button, Container, Header, Icon, Search, } from 'semantic-ui-react';

class Topics extends React.Component {
  state = { searchText: '', };

  displayTopics = () => {
    if (this.props.topics.length <= 0)
      return <Header as='h3'>You have no topics. Go add some!</Header>

    return this.props.topics.map((t, i) => (
      <StyledTopicTitle key={i} to={`/topics/${t.id}`}>
        {t.title}
      </StyledTopicTitle>
    ));
  };

  render() {
    return (
      <Container>
        <br />
        <Header as='h1'>Topics</Header>
        <div style={{ display: 'flex', }}>
          <Search style={{ marginRight: '20px', }} />
          <Link to='/topics/new'>
            <Button color='blue'>
              <Icon name='add' />
              Add Topic
            </Button>
          </Link>
        </div>
        <br />
        <br />
        <div style={{ display: 'inline-block' }}>
          {this.displayTopics()}
        </div>
        <br />
        <br />
        <br />
        <br />
      </Container>
    );
  };
};

const StyledTopicTitle = styled(Link) `
  font-size: 20px;
  font-weight: 400;
  color: black;
  padding: 10px;
  display: block;
`;

export default Topics;
