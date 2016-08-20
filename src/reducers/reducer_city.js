import { FETCH_WEATHER } from '../actions/index';

const INITIAL_STATE = {all:[], city: ''};

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    return [action.payload.data, ...state ];
  }
  return state; 
}
