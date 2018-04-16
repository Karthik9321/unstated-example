import { Container } from 'unstated';

export default class LocationsContainer extends Container {
  state = {
    locations: [],
    isLoading: false,
    isError: false
  };

  async fetchLocations() {
    let stateObj = {
      locations: [],
      isLoading: true
    }
    this.setState(stateObj);
    try {
      const data = await fetch('https://swapi.co/api/people/')
      const json = await data.json()
      stateObj = {
        locations: json.results,
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