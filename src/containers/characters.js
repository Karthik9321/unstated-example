import { Container } from 'unstated';

export default class CharactersContainer extends Container {
  state = {
    characters: [],
    isLoading: false,
    isError: false
  };

  async fetchCharacters() {
    let stateObj = {
      characters: [],
      isLoading: true
    }
    this.setState(stateObj);
    try {
      const data = await fetch('https://swapi.co/api/people/')
      const json = await data.json()
      stateObj = {
        characters: json.results,
        isLoading: false
      }
      this.setState(stateObj);
    } catch (err) {
      this.setState({
        isLoading: false,
        isError: true,
        error: err,
      })
    }
  }
}