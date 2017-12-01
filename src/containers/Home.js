import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/Container';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';


const Image = styled.img`
  width: 100%;
`;

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>

      <div class="topnav" id="myTopnav">
        <Zoom delay={230} duration={1000}>
          <a class="active" href="#home">HOME</a>
          <a href="">Education</a>
          <a href="">Programming</a>
          <a href="">Projects</a>
          <a href="">Languages</a>
          <a href="">Hobbies</a>
          <a href="">Contact</a>
        </Zoom>
      </div>

       <Zoom delay={230} duration={1000}>
          <h1></h1>
        </Zoom>

        <Zoom delay={270} duration={1000}>
          <Image src={require('../assets/giphy.gif')} alt="giphy-image"/>
        </Zoom>

        <Zoom delay={300} duration={1000}>
         <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in velit dolor. In et dolor non sapien ultricies hendrerit. Maecenas ultricies porttitor est, sit amet eleifend sem egestas ut. Cras eget imperdiet est. Cras viverra ligula urna, eget rutrum erat lacinia nec. Praesent nec libero accumsan turpis molestie dapibus. Mauris scelerisque ligula sed felis ultricies, ut efficitur orci dignissim. Nam eleifend ligula sit amet congue dapibus. Vestibulum ut nisi vel quam luctus mollis vel ac mi. Vivamus pellentesque finibus sapien quis convallis. Donec at interdum mi. Sed finibus sed justo ac malesuada. Aliquam pulvinar pellentesque lacinia. Integer commodo blandit quam, ut blandit quam pretium eget.
         </p>
        </Zoom>

      </Container>
    );
  }
}
