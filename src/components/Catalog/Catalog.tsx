import React, {
  FC,
  MouseEvent,
  useEffect,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';

// Components
import axios from 'axios';
import { Box } from '@material-ui/core';
import Cards from './Cards';
import Pagination from './Pagination';

import useStyles from './styles';

const Catalog: FC = () => {
  const history = useHistory();
  const classes = useStyles();

  const [totalCars, setTotalCars] = useState([]);
  const [cars, setCars] = useState([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(5);

  useEffect(() => {
    checkUrlParams();
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

  const checkUrlParams = () => {
    const regex = /(?<=page=)\d+/;
    const value = history.location.search.match(regex);
    if (value != null) {
      setCurrentPage(+value[0]);
    }
  };

  const fetchPaginateCars = async () => {
    const api = 'http://localhost:3000';
    const currentUrl = `/cars?_page=${currentPage}&_limit=${carsPerPage}`;
    history.push(currentUrl);
    try {
      const response = await axios({
        method: 'get',
        url: api + currentUrl,
      });
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
    <div className={classes.catalogContainer}>
      <Box>
        <Cards cars={cars} loading={loading} error={error} />
        <Pagination
          carsPerPage={carsPerPage}
          totalCars={totalCars}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Box>
    </div>
  );
};

export default Catalog;
