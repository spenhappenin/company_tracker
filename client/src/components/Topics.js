import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, } from 'react-router-dom';
import { setFlash, } from '../actions/flash';
import { Button, Container, Header, Icon, Dropdown, } from 'semantic-ui-react';

class Topics extends React.Component {
  state = { category: '', };

  handleChange = (category) => this.setState({ category });

  displayTopics = () => {
    const { category, } = this.state;

    if (this.props.topics.length <= 0)
      return <Header as='h3'>You have no topics. Go add some!</Header>

    if (category === "") {
      return this.props.topics.map( (t, i) => (
        <StyledTopicTitle key={i} to={`/topics/${t.id}`}>
          { t.title }
        </StyledTopicTitle>
      ));
    } else {
      return this.props.topics.map( (t, i) => {
        if (category === t.category) {
          return (
            <StyledTopicTitle key={i} to={`/topics/${t.id}`}>
              { t.title }
            </StyledTopicTitle>
          )
        }
      });
    }
      
  };

  render() {
    return (
      <Container>
        <br />
        <Header as='h1'>Topics</Header>
        <div style={{ display: 'flex', }}>
          <Link to='/topics/new'>
            <Button color='blue'>
              <Icon name='add' />
              Add Topic
            </Button>
          </Link>
          <Dropdown 
            name='category' 
            placeholder='Select Category' 
            selection 
            options={this.props.categories} 
            onChange={(e, data) => this.handleChange(data.value)}
          />
        </div>
        <br />
        <br />
        <div style={{ display: 'inline-block' }}>
          { this.displayTopics() }
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
