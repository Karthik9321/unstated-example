export default function(state = 1, action) {
    switch(action.type) {
      case 'AMOUNT_MODIFIED':
        return action.payload
    }
    return state;
  }