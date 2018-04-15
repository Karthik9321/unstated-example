import { Container } from 'unstated';

export default class AmountContainer extends Container {
  state = {
    amount: 1
  };

  setAmount(amount) {
    this.setState({ amount });
  }
}
