export interface Users {
    id: number,
    name: string,
    company: {
      name: string
    }
    email: string
  }

// Redux
export interface UserState {
    users: Users[],
    loading: boolean,
    error: null | string
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCES = 'FETCH_USERS_SUCCES',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

export interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS
}

export interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCES
    payload: any[]
}

export interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: string;

}

export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction
