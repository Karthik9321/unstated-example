import { Subscribe, Container } from 'unstated';
import React from 'react';
import { AmountContainer, CounterContainer } from '../containers';

export default class Counter extends React.Component {
  render() {
    return (
      <Subscribe to={[AmountContainer, CounterContainer]}>
        {(amount, counter) => (
          <div className="container text-center mt-3" style={{paddingTop: 100, marginBottom: 40,}}>
            <p>Count:</p>
            <button type="button" className="btn btn-info" style={{marginRight: 30, paddingLeft: 20, paddingRight: 20,}} onClick={() => counter.decrement(amount.state.amount)}>-</button>
            <span style={{paddingTop: 4, paddingBottom:4, paddingRight: 15, paddingLeft: 15, borderColor: '#8244a5', borderWidth: 1, borderStyle: 'solid', borderRadius: 4}}> {counter.state.count} </span>
            <button type="button" className="btn btn-info" style={{marginLeft: 30, paddingLeft: 20, paddingRight: 20,}} onClick={() => counter.increment(amount.state.amount)}>+</button>
          </div>
        )}
      </Subscribe>
    );
  }
}