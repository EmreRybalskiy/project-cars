import React, {
  FC,
  MouseEvent,
  useEffect,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';

// Components
import axios from 'axios';
// import { Cars } from 'types/cars';
import Cards from './Cards';
import Pagination from './Pagination';

const Catalog: FC = () => {
  const history = useHistory();

  const [totalCars, setTotalCars] = useState([]);
  const [cars, setCars] = useState([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // const [currentCar, setCurrentCar] = useState<Cars[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(5);

  useEffect(() => {
    fetchCars();
  }, []);

  useEffect(() => {
    fetchPaginateCars();
  }, [currentPage]);

  const fetchCars = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:3000/cars',
      });
      setTotalCars(response.data);
      setLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  const fetchPaginateCars = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `http://localhost:3000/cars?_page=${currentPage}&_limit=${carsPerPage}`,
      });
      history.push(`cars?_page=${currentPage}&_limit=${carsPerPage}`);
      setCars(response.data);
      setLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  const paginate = (event: MouseEvent<HTMLElement>) : void => {
    if (event.currentTarget.textContent !== null) {
      const currentPage = +event.currentTarget.textContent;
      setCurrentPage(currentPage);
    }
  };

  return (
    <div>
      <Cards cars={cars} loading={loading} error={error} />
      <Pagination
        carsPerPage={carsPerPage}
        totalCars={totalCars}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Catalog;
