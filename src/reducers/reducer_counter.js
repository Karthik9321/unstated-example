export default function(state = 0, action) {
  switch(action.type) {
    case 'COUNTER_MODIFIED':
      return action.payload
  }
  return state;
}