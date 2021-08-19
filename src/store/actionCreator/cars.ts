import { CarAction, CarActionTypes } from 'types/carsActions';
import { Dispatch } from 'redux';
import axios from 'axios';

const fetchCars = () => async (dispatch: Dispatch<CarAction>): Promise<void> => {
  try {
    dispatch({ type: CarActionTypes.FETCH_CARS });
    const response = await axios.get('http://localhost:3000/cars');
    dispatch({ type: CarActionTypes.FETCH_CARS_SUCCES, payload: response.data });
  } catch (e) {
    dispatch({ type: CarActionTypes.FETCH_CARS_ERROR, payload: 'something went wrong' });
  }
};

export default fetchCars;
