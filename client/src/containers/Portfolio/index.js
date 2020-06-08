import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Container, Grid, GridRow, Header, Image, Transition, Form, Button } from 'semantic-ui-react';
import { email, required } from 'redux-form-validators';
import axios from 'axios';
import { AUTH_USER } from '../../actions/types';

// images
import Background from '../Assets/Images/Background01.jpg'
import Character01 from '../Assets/Images/Character01.jpg'
import Character02 from '../Assets/Images/Character02.jpg'
import Character03 from '../Assets/Images/Character03.jpg'
import Character04 from '../Assets/Images/Character04.jpg'
import HeadShot01 from '../Assets/Images/HeadShot01.jpg'
import HeadShot02 from '../Assets/Images/HeadShot02.jpg'
import HeadShot03 from '../Assets/Images/Headshot03.jpg'
import HeadShot04 from '../Assets/Images/Headshot04.jpg'
import HeadShot05 from '../Assets/Images/Headshot05.jpg'
import image3 from '../Assets/Images/image3.jpg'
import Tyrant from '../Assets/Images/tyrant.jpg'
// lets try something
const transitions = [
  'browse',
  'browse right',
  'drop',
  'fade',
  'fade up',
  'fade down',
  'fade left',
  'fade right',
  'fly up',
  'fly down',
  'fly left',
  'fly right',
  'horizontal flip',
  'vertical flip',
  'scale',
  'slide up',
  'slide down',
  'slide left',
  'slide right',
  'swing up',
  'swing down',
  'swing left',
  'swing right',
  'zoom',
]
const options = transitions.map((name) => ({
  key: name,
  text: name,
  value: name,
}))

class Portfolio extends Component {

  state = { 
    animation: transitions[0],
    duration: 500,
    visible: true,
    stage: 0,
    }
    // in the first case name is = to animation and value is equal to the string value
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))

  handleTestGoBack = () => {
    this.setState(() => ({ animation: 'fly right'}))
    setTimeout(() =>
    {this.setState((prevState) => ({ visible: !prevState.visible }))},5);
    setTimeout(() =>
    {this.setState((prevState) => ({ animation: 'fly left', visible: !prevState.visible }))},550);

  }
  handleTestGoForward = () => {

      this.setState(() => ({ animation: 'fly left'}))
      setTimeout(() =>
      {this.setState((prevState) => ({ visible: !prevState.visible }))},5);
      setTimeout(() =>
      {this.setState((prevState) => ({ animation: 'fly right', visible: !prevState.visible }))},550);

    
  }
    

  async componentDidMount()  {

    try {
      console.log('component successfully mounted')
   
       
    } catch (e) {
      console.log(e)
    }

  }




  render() {
    const { animation, duration, visible } = this.state
    return (
      <Grid columns={2}>
        <Grid.Column as={Form}>

        </Grid.Column>
          <Button
          content={'testBack'}
          onClick={this.handleTestGoBack}
          >
            
          </Button>
          <Button
          content={'testForward'}
          onClick={this.handleTestGoForward}>

          </Button>
        <Grid.Column>
          <Transition.Group animation={animation} duration={duration}>
            {visible && (
              <Image centered size='small' src={HeadShot05} />
            )}
          </Transition.Group>
        </Grid.Column>
      </Grid>
    );
  }
}
export default reduxForm({ form: 'portfolio' })(Portfolio);
