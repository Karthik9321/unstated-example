import { Subscribe, Container } from 'unstated';
import React from 'react';
import { AmountContainer, CounterContainer } from '../containers';

export default class Counter extends React.Component {
  render() {
    return (
      <Subscribe to={[AmountContainer, CounterContainer]}>
        {(amount, counter) => (
          <div>
            <span>Count: {counter.state.count}</span>
            <button onClick={() => counter.decrement(amount.state.amount)}>-</button>
            <button onClick={() => counter.increment(amount.state.amount)}>+</button>
          </div>
        )}
      </Subscribe>
    );
  }
}