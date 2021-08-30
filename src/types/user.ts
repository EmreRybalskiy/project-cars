export interface Users {
  name: string,
    password: string,
    email: string,
    id?: string,
    isAdmin?: boolean;
    favorites: number[]

  }

export interface UserState {
    users: Users[],
    loading: boolean,
    error: null | string
}
