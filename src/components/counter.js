import { Subscribe, Container } from 'unstated';
import React from 'react';
import { AmountContainer, CounterContainer } from '../containers';

export default class Counter extends React.Component {
  render() {
    return (
      <Subscribe to={[AmountContainer, CounterContainer]}>
        {(amount, counter) => (
          <div className="container text-center mt-3" style={{paddingTop: 50, marginBottom: 40,}}>
            <p>Count:</p>
            <button type="button" className="btn btn-info" style={styles.buttonRightStyle} onClick={() => counter.decrement(amount.state.amount)}>-</button>
            <span style={styles.spanStyle}> {counter.state.count} </span>
            <button type="button" className="btn btn-info" style={styles.buttonLeftStyle} onClick={() => counter.increment(amount.state.amount)}>+</button>
          </div>
        )}
      </Subscribe>
    );
  }
}

const styles = {
  buttonRightStyle: {
    marginRight: 30, 
    paddingLeft: 20, 
    paddingRight: 20
  },
  buttonLeftStyle: {
    marginLeft: 30, 
    paddingLeft: 20, 
    paddingRight: 20
  },
  spanStyle: {
    paddingTop: 4, 
    paddingBottom:4, 
    paddingRight: 15, 
    paddingLeft: 15, 
    borderColor: '#8244a5', 
    borderWidth: 1, 
    borderStyle: 'solid', 
    borderRadius: 4
  }
}