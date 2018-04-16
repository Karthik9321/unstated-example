import { Container } from 'unstated';

export default class LocationsContainer extends Container {
  state = {
    locations: [],
    isLoading: false,
    isError: false
  };
  
  doDumbShit(){
    console.log(this,'this');
    this.setState({
      isError: !this.state.isError
    });
  }
  
  async fetchLocations() {
    let stateObj = {
      locations: [],
      isLoading: true
    }
    // console.log(JSON.stringify(stateObj), 'stateObjBefore');
    this.setState(stateObj);
    try {
      const data = await fetch('https://swapi.co/api/people/')
      const json = await data.json()
      stateObj = {
        locations: json.results,
        isLoading: false
      }
      // console.log(JSON.stringify(stateObj), 'stateObjAfter');
      this.setState(stateObj);
    } catch (err) {
      this.setState({
        isLoading: false,
        isError: true,
        error: err,
      })
      console.log('error: ', err)
    }
  }
}