import React, {Component} from 'react';

export default class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0
    }
  }

  increment = () => {
    this.setState({count: this.state.count + 1});
  }

  decrement = () => {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return(
      <div className="container text-center mt-3" style={{paddingTop: 50, marginBottom: 40,}}>
        <p>Count:</p>
        <button type="button" className="btn btn-info" style={styles.buttonRightStyle} onClick={this.decrement}>-</button>
        <span style={styles.spanStyle}>{this.state.count}</span>        
        <button type="button" className="btn btn-info" style={styles.buttonLeftStyle} onClick={this.increment}>+</button>
      </div>
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
