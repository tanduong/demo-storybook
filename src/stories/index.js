import React, {Component} from 'react';

import {storiesOf} from '@storybook/react';
import QuantityInput from '../components/QuantityInput';

class QuantityInputDemo extends Component {
  state = {
    value: 0,
  };

  onChange = (value) => {
    console.log('value', value);
    this.setState({value});
  };

  render() {
    return <QuantityInput onChange={this.onChange} value={this.state.value} />;
  }
}

storiesOf('QuantityInput', module)
  .add('normal', () => <QuantityInput />)
  .add('controlled component', () => <QuantityInputDemo />);
