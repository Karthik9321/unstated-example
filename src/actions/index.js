const modifyCounter = (count) => {
  return {
    type: 'COUNTER_MODIFIED',
    payload: count
  }
}

const modifyAmount = (amount) => {
  return {
    type: 'AMOUNT_MODIFIED',
    payload: amount
  }
}

module.exports = {
  modifyCounter,
  modifyAmount
};