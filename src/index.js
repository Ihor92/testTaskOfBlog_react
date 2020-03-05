import { createStore, bindActionCreators } from 'redux';
import reducer from './reduser';
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch } = store;


const { inc, dec, clr, rnd, clr_rnd } = 
  bindActionCreators(actions, dispatch);


document
  .getElementById('inc')
  .addEventListener('click', inc);

document.
  getElementById('dec')
  .addEventListener('click', dec);

document
  .getElementById('clr'
  ).addEventListener('click', clr);

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    rnd(payload);
  });

document.getElementById('clr_rnd').addEventListener('click', () => {
  const payload_clr = Math.floor(Math.random() * 10);
  clr_rnd(payload_clr);
});

const update = () => {
  document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);