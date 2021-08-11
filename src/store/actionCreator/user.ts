import { UserAction, UserActionTypes } from './../../types/user';
import {Dispatch} from 'redux'
import axios from 'axios';


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {dispatch({type: UserActionTypes.FETCH_USERS_SUCCES, payload: response.data})
        }, 1000)
        } catch (e) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Произошла ошибка при загрузке пользователей'})
        }
    }
}