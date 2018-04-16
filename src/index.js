import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Counter from './components/counter';
import Amount from './components/amount';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


class App extends React.Component {
  render() {
    return (
    <div>
      <Counter />
      <Amount />
    </div>
    );
  }
}
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));
