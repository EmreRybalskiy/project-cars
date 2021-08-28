import React, {
  FC,
  MouseEvent,
  useEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';

import fetchCars from 'store/actionCreator/cars';
// Components
import OurCars from './OurCars';
import Pagination from './Pagination';
// hook
import useTypeSelector from '../hooks/useTypeSelector';

const Catalog: FC = () => {
  const { cars, loading, error } = useTypeSelector((state) => state.cars);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(4);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const indexOFLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOFLastCar - carsPerPage;
  const currentCar = cars.slice(indexOfFirstCar, indexOFLastCar);

  const paginate = (event: MouseEvent<HTMLElement>) : void => {
    if (event.currentTarget.textContent !== null) {
      const currentPage = +event.currentTarget.textContent;
      setCurrentPage(currentPage);
    }
  };

  return (
    <div>
      <OurCars cars={currentCar} loading={loading} error={error} />
      <Pagination
        carsPerPage={carsPerPage}
        totalCars={cars}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Catalog;
