export interface Cars {
    image: any,
    brand: string,
    color: string,
    year?: string,
    engineType?: string,
    fuelType?: string;
    transmission?: string;
    id?: number;
    userId?: number;
    date?: string;
    deleteCard?: (id: number) => void;
    deleteCarFromFavorites?: (id: number) => void;
    addFavoriteCard?: (id: number) => void;
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
