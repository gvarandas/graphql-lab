if (module.hot) {
  module.hot.accept();
}

console.log('hello im the ultra newest loaded');

import { polyfill } from 'es6-promise';
import 'isomorphic-fetch';
polyfill();

const sides = 6;
const rolls = 3;

const queryObj = {
  query: `query RollDice($sides: Int, $rolls: Int!) {
    getDie(numSides: $sides) {
      rollOnce,
      roll(numRolls: $rolls),
    }
  }`,
  variables: { sides, rolls },
};

fetch('http://localhost:4000/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(queryObj),
})
  .then(response => response.json())
  .then(response => console.log('response', response.data))
  .catch(error => console.log('error', error));