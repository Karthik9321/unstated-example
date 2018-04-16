import React, {Component} from 'react';
import {connect} from 'react-redux';
import {modifyAmount} from '../actions';
import {bindActionCreators} from 'redux';

class Amount extends Component {
  modifyAmount(amount) {
    this.props.modifyAmount(amount);
  }

  render() {
    return (
      <div className="text-center">
        <p>Amount: </p>
        <input
          type="number"
          style={styles.inputAreaStyle}
          value={this.props.amount}
          className="form-control"
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

  const styles = {
    inputAreaStyle : {
      maxWidth: 200, 
      height: 25, 
      margin: 'auto', 
      marginBottom: 50
    },
    buttonStyle: {
      backgroundColor: 'gray', 
      height: 25, color: '#fff',
      border: 'none', 
      borderRadius: 4, 
      width: 200
    }
  }
  
  