import React, {Component} from 'react';
import styles from './QuantityInput.module.scss';

export default class QuantityInput extends Component {
  state = {
    value: 0,
  };

  updateValue = (change) => {
    this.setState(({value}) => {
      let newValue = value + change;
      if (newValue < 0) {
        newValue = 0;
      }

      return {value: newValue};
    });
  };

  render() {
    return (
      <div class={styles.QuantityInput}>
        <button onClick={() => this.updateValue(-1)}>-</button>
        <input value={this.state.value} type="text" />
        <button onClick={() => this.updateValue(1)}>+</button>
      </div>
    );
  }
}
