import React, {Component} from 'react';
import {connect} from 'react-redux';
import {modifyAmount} from '../actions';
import {bindActionCreators} from 'redux';

class Amount extends Component {
  constructor(props){
    super(props);
  }

  modifyAmount(amount) {
    this.props.modifyAmount(amount);
  }

  render() {
    return (
      <div>
        <label>Amount: </label>
        <input
          type="number"
          value={this.props.amount || 1}
          onChange={event => {
            this.modifyAmount(parseInt(event.currentTarget.value, 10));
          }}
        />
      </div>
    )
  }
}
  function mapStateToProps(state) {
    return {
      amount: state.amount
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({modifyAmount: modifyAmount}, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Amount)
