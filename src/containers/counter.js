import { Container } from 'unstated';

export default class CounterContainer extends Container {
  state = {
    count: 0
  };

  increment(amount) {
    this.setState({ count: this.state.count + amount });
  }

  decrement(amount) {
    this.setState({ count: this.state.count - amount });
  }
}