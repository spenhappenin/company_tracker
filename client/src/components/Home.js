import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import { Header, } from 'semantic-ui-react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <ParticlesContainer params={settings}>
          <Header as='h1' textAlign='center'>Home Component</Header>
          <Header as='h1' inverted></Header>
        </ParticlesContainer>
      </div>
    );
  }
}

const ParticlesContainer = styled(Particles)`
  background: #273149;
  background: -moz-linear-gradient(top, #273149 0%, #3c4c70 100%);
  background: -webkit-linear-gradient(top, #273149 0%,#3c4c70 100%);
  background: linear-gradient(to bottom, #273149 0%,#3c4c70 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#273149', endColorstr='#3c4c70',GradientType=0 );
`;

const settings = {
  "particles": {
    "number": {
      "value": 125,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffe38c"
    },
    "shape": {
      "type": "edge",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 1,
        "height": 1
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 48.7246327380807,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "top",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

// const HomeContainer = styled.div`
//   height: 800px;
//   border: 2px solid red;
// `;

export default Home;
