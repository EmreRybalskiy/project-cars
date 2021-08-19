import { CarAction } from 'types/carsActions';
import { CardState } from '../../types/cars';
import { CarActionTypes } from '../../types/carsActions';

const initialState: CardState = {
  cars: [],
  loading: false,
  error: null,
};

const carReducer = (state = initialState, action: CarAction): CardState => {
  switch (action.type) {
    case CarActionTypes.FETCH_CARS:
      return { loading: true, error: null, cars: [] };
    case CarActionTypes.FETCH_CARS_SUCCES:
      return { loading: false, error: null, cars: action.payload };
    case CarActionTypes.FETCH_CARS_ERROR:
      return { loading: false, error: action.payload, cars: [] };
    default:
      return state;
  }
};

export default carReducer;
