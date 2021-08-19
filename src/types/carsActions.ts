import { Cars } from './cars';

export enum CarActionTypes {
    FETCH_CARS = 'FETCH_CARS',
    FETCH_CARS_SUCCES = 'FETCH_CARS_SUCCES',
    FETCH_CARS_ERROR = 'FETCH_CARS_ERROR'
}

export interface FetchCarsAction {
    type: CarActionTypes.FETCH_CARS
}

export interface FetchCarsSuccessAction {
    type: CarActionTypes.FETCH_CARS_SUCCES
    payload: Cars[]
}

export interface FetchCarsErrorAction {
    type: CarActionTypes.FETCH_CARS_ERROR,
    payload: string;

}

export type CarAction = FetchCarsAction | FetchCarsSuccessAction | FetchCarsErrorAction
