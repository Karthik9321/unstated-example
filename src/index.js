import React from 'react';
import { render } from 'react-dom';
import { Provider, Subscribe, Container } from 'unstated';
import { AmountContainer, LocationsContainer } from './containers';
import Counter from './components/counter';
import ReactLoading from 'react-loading';

const Loader = ({ type, color }) => (
   <ReactLoading type={type} color={color} />
);

class ProperListRender extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map(function(listValue){
          return <li>{listValue.name}</li>;
        })}
      </ul>
    )
  }
};

class App extends React.Component {
  render() {
    return (
      <Subscribe to={[AmountContainer, LocationsContainer]}>
        {(amount, location) => (
          <div>
            <Counter />
            <label>Amount: </label>
            <input
              type="number"
              value={amount.state.amount}
              onChange={event => {
                amount.setAmount(parseInt(event.currentTarget.value, 10));
              }}
            />
            <button onClick={event => {
              location.fetchLocations();
              }
            }>Fetch locations</button>
            { location.state.isLoading && <Loader color='black'/> }
            { location.state.locations.length > 0 && <ProperListRender list={location.state.locations} />}
          </div>
        )}
      </Subscribe>
    );
  }
}

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);