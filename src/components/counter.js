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
      <div className="container text-center mt-3" style={{paddingTop: 50, marginBottom: 40,}}>
        <p>Count:</p>
        <button type="button" className="btn btn-info" style={styles.buttonRightStyle} onClick={() => this.props.modifyCounter(this.props.count - (this.props.amount ? this.props.amount : 1))}>-</button>
        <span style={styles.spanStyle}>{this.props.count || 0}</span>        
        <button type="button" className="btn btn-info" style={styles.buttonLeftStyle} onClick={() => this.props.modifyCounter(this.props.count + (this.props.amount ? this.props.amount : 1))}>+</button>
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
