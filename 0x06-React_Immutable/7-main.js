import { Map } from 'immutable';
import areMapsEqual from './7-equality.js';

const map1 = new Map({
  firstName: 'Wadia',
  lastName: 'Wardy',
});
const map2 = new Map({
  firstName: 'Julien',
  lastName: 'Barbier',
});

console.log(areMapsEqual(map1, map2));
