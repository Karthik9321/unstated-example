import React, {Component} from 'react';
import {connect} from 'react-redux';
import {modifyCounter} from '../actions';
import {bindActionCreators} from 'redux';

class Counter extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <span>Count: {this.props.count || 0}</span>
        <button onClick={() => this.props.modifyCounter(this.props.count - (this.props.amount ? this.props.amount : 1))}>-</button>
        <button onClick={() => this.props.modifyCounter(this.props.count + (this.props.amount ? this.props.amount : 1))}>+</button>
      </div>);
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
    amount: state.amount
  };
}
  
function mapDispatchToProps(dispatch) {
  return bindActionCreators({modifyCounter: modifyCounter}, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
