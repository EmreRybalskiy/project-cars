import { UserAction, UserActionTypes } from 'types/user';
import { Dispatch } from 'redux';
import axios from 'axios';

const fetchUsers = () => async (dispatch: Dispatch<UserAction>): Promise<void> => {
  try {
    dispatch({ type: UserActionTypes.FETCH_USERS });
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: UserActionTypes.FETCH_USERS_SUCCES, payload: response.data });
  } catch (e) {
    dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Произошла ошибка при загрузке пользователей' });
  }
};

export default fetchUsers;
