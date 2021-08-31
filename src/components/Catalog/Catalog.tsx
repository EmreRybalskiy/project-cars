import React, {
  FC,
  MouseEvent,
  useEffect,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';

// Components
import axios from 'axios';
import { Box, Button } from '@material-ui/core';
import Cards from './Cards';
import Pagination from './Pagination';
import FilterCars from './FilterCars';
import AppDrawer from './AppDrawer';
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

  const [isDrawer, setIsDrawer] = useState(false);
  // filter
  const [brand, setBrand] = useState<string>('');
  const [typeCar, setTypeCar] = useState<string>('');
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
    const currentUrl = `/cars?_page=${currentPage}&_limit=${carsPerPage}${brand && `&brand=${brand}`}${typeCar && `&fuelType=${typeCar}`}`;
    console.log(currentUrl);
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
      history.push(`cars?_page=${currentPage}&_limit=${carsPerPage}`);
      setCurrentPage(currentPage);
    }
  };

  const handleDrawer = () => {
    setIsDrawer(!isDrawer);
  };

  const handleAccept = () => {
    fetchPaginateCars();
  };

  const handleReset = () => {
    setBrand('');
    setTypeCar('');
    fetchPaginateCars();
  };
  return (
    <div>
      <Box>
        <AppDrawer
          isDrawer={isDrawer}
          typeCar={typeCar}
          setIsDrawer={setIsDrawer}
          setTypeCar={setTypeCar}
          setBrand={setBrand}
          handleAccept={handleAccept}
          handleReset={handleReset}
        />
        <Box>
          <Button onClick={handleDrawer} className={classes.filterBtn} variant="contained">Filter</Button>
        </Box>
      </Box>
      <Box>
        <FilterCars />
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
