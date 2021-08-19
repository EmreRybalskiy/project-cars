import { UserAction, UserActionTypes } from 'types/userActions';
import { Dispatch } from 'redux';
import axios from 'axios';

const fetchUsers = () => async (dispatch: Dispatch<UserAction>): Promise<void> => {
  try {
    dispatch({ type: UserActionTypes.FETCH_USERS });
    const response = await axios.get('http://localhost:3000/users');
    dispatch({ type: UserActionTypes.FETCH_USERS_SUCCES, payload: response.data });
  } catch (e) {
    dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: 'something went wrong' });
  }
};

export default fetchUsers;
