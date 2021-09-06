export interface Cars {
    image: string,
    brand: string,
    color: string,
    year?: string,
    engineType?: string,
    fuelType?: string;
    transmission?: string;
    id?: number;
    userId?: number;
  }

export interface CardState {
    cars: Cars[],
    loading: boolean,
    error: null | string,
    paginate: Cars[]
}

export type GenericCarImage = {
    [K in any] : any
}
