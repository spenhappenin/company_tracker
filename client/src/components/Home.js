import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

class Home extends React.Component {
  render() {
    return (
      <HomeContainer>
        <Circle />
        {/* <Header as='h1' textAlign='center'>Home Component</Header> */}
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  height: 800px;
  border: 2px solid red;
`;

export default Home;
