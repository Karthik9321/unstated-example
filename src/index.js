import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';

class App extends React.Component {
  render() {
    return (
    <div>
      <Counter />
      {/* <Amount /> */}
    </div>
    );
  }
}
ReactDOM.render(
    <App />
  , document.getElementById('root'));
