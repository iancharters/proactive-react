import React, { Component } from 'react';
import { render } from 'react-dom';

import './index.css';
import keenImage from '../assets/images/keen.png';
export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
        <img src={ keenImage } alt='Commander Keen' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
