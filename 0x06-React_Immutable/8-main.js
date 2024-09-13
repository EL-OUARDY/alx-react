import { Map } from 'immutable';
import printBestStudents from './8-seq.js';

const grades = Map({
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
  2: {
    score: 90,
    firstName: 'Julien',
    lastName: 'barbier',
  },
  3: {
    score: 60,
    firstName: 'Wadia',
    lastName: 'EDY',
  },
});

printBestStudents(grades);
