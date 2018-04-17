import { CounterContainer } from '../containers';

test('counter', () => {
  let counter = new CounterContainer();
  assert(counter.state.count === 0);
  
  counter.increment();
  assert(counter.state.count === 1);
  
  counter.decrement();
  assert(counter.state.count === 0);
});
  


