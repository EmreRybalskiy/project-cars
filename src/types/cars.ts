export interface Cars {
    image: string,
    brand: string,
    color: string,
    year?: string,
    engineType?: string,
    fuelType?: string;
    transmission?: string;
    id?: number;
  }

export interface CardState {
    cars: Cars[],
    loading: boolean,
    error: null | string
}

export type GenericCarImage = {
    [K in any] : any
}
