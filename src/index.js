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
      <section>
        <h3>Star Wars Characters</h3>
        <ul>
          {this.props.list.map(function (listValue) {
            return <li>{listValue.name}</li>;
          })}
        </ul>
      </section>
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
            <div className="text-center">
              <p>Amount: </p>
              <input
                type="number"
                style={{maxWidth: 200, height: 25, margin: 'auto', marginBottom: 50,}}
                className="form-control"
                value={amount.state.amount}
                onChange={event => {
                  amount.setAmount(parseInt(event.currentTarget.value, 10));
                }}
              />
              <button style={{backgroundColor: 'gray', height: 25, color: '#fff',border: 'none', borderRadius: 4, width: 200,}} onClick={event => {location.fetchLocations()}}>Fetch locations</button>

              {location.state.isLoading && <Loader color='black' />}
              
              {location.state.locations.length > 0 && <ProperListRender list={location.state.locations} />}
            </div>
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