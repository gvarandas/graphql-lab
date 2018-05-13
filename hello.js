// const xhr = new XMLHttpRequest();
// xhr.responseType = 'json';
// xhr.open("POST", "/graphql");
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.setRequestHeader("Accept", "application/json");
// xhr.onload = function () {
//   console.log('data returned:', xhr.response);
// }
// xhr.send(JSON.stringify({ query: "{ hello }" }));

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