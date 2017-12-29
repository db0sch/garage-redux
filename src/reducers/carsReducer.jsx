import {SET_CARS} from '../actions';
import {FETCH_CAR} from '../actions';

export default function carsReducer(state = [], action) {
  switch (action.type) {
    case SET_CARS:
      return action.payload;
    case SET_CARS:
      return [action.payload];
    default:
      return state;
  }
}
