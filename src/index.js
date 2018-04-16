import React from 'react';
import { render } from 'react-dom';
import { Provider, Subscribe, Container } from 'unstated';
import { AmountContainer, CharactersContainer } from './containers';
import Counter from './components/counter';
import ReactLoading from 'react-loading';

const Loader = ({ type, color }) => (
  <ReactLoading type={type} color={color} />
);

class ProperListRender extends React.Component {
  render() {
    return (
      <section>
        <h4>Star Wars Characters</h4>
        <ul className="list-group col-sm-5" style={{marginLeft:325}}>
          {this.props.list.map(function (listValue) {
            return <li className = "list-group-item">{listValue.name}</li>;
          })}
        </ul>
      </section>
    )
  }
};

class App extends React.Component {
  render() {
    return (
      <Subscribe to={[AmountContainer, CharactersContainer]}>
        {(amount, characters) => (
          <div>
            <Counter />
            <div className="text-center">
              <p>Amount: </p>
              <input
                type="number"
                style={styles.inputAreaStyle}
                className="form-control"
                value={amount.state.amount}
                onChange={event => {
                  amount.setAmount(parseInt(event.currentTarget.value, 10));
                }}
              />
              <button style={styles.buttonStyle} onClick={event => {characters.fetchCharacters()}}>Fetch Characters</button>

              {characters.state.isLoading && <Loader color='black' />}
              
              {characters.state.characters.length > 0 && <ProperListRender list={characters.state.characters} />}
            </div>
          </div>
        )}
      </Subscribe>
    );
  }
}
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

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);

