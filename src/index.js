import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';

import Counter from './Counter';

import reducer from './reduser';
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = 
  bindActionCreators(actions, dispatch);

const update = () => {
  ReactDOM.render(
    <Counter
      counter={store.getState()}
      inc={inc}
      dec={dec}
      rnd={() => {
        const value = Math.floor(Math.random() * 10);
        rnd(value);
      }}
    />,
    document.getElementById('root'));
};

update()
store.subscribe(update);
