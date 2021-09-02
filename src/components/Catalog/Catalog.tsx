import React, {
  FC,
  MouseEvent,
  useEffect,
  useState,
  ChangeEvent,
} from 'react';
import { useHistory } from 'react-router-dom';

// Components
import axios from 'axios';
import { Box, Button } from '@material-ui/core';
import Cards from './Cards';
import Pagination from './Pagination';
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
  const [carsPerPage] = useState(2);

  const [isDrawer, setIsDrawer] = useState(false);
  // filter
  const [brand, setBrand] = useState<string>('');
  const [typeCar, setTypeCar] = useState<string>('');
  const [date, setDate] = useState({
    dateValue: '',
  });
  const [calendarDate, setCalendarDate] = useState({
    dateValue: '',
  });

  useEffect(() => {
    checkUrlParams();
    fetchCars();
  }, []);

  useEffect(() => {
    fetchCars();
  }, [currentPage, brand, typeCar, date.dateValue]);

  useEffect(() => {
    fetchCarsByDate();
  }, [calendarDate.dateValue]);

  const api = 'http://localhost:3000';
  const pagination = `/cars?_page=${currentPage}&_limit=${carsPerPage}`;
  const filterParams = `${brand && `&brand=${brand}`}${typeCar && `&fuelType=${typeCar}`}${date.dateValue && `&_sort=date&_order=${date.dateValue}`}`;
  const currentUrl = pagination + filterParams;

  const checkUrlParams = () => {
    const regex = /(?<=page=)\d+/;
    const value = history.location.search.match(regex);
    if (value != null) {
      setCurrentPage(+value[0]);
    }
  };

  const fetchCars = async () => {
    history.push(currentUrl);
    try {
      const response = await axios({
        method: 'get',
        url: api + currentUrl,
      });
      const responseFilter = await axios({
        method: 'get',
        url: `${api}/cars?${filterParams}`,
      });

      console.log(response.data);
      console.log(responseFilter.data);
      setTotalCars(responseFilter.data);
      setCars(response.data);

      setLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  const fetchCarsByDate = async () => {
    history.push(currentUrl);
    try {
      const response = await axios({
        method: 'get',
        url: `${api}${pagination}`,
      });
      const responseFilter = await axios({
        method: 'get',
        url: `${api}/cars?date=${calendarDate.dateValue}`,
      });
      if (responseFilter.data.length !== 0) {
        setTotalCars(responseFilter.data);
      } else {
        fetchCars();
      }
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

  const handleReset = () => {
    setBrand('');
    setTypeCar('');
    setCalendarDate({ dateValue: '' });
    setDate({ dateValue: '' });
    fetchCars();
  };

  const handleSortDate = (event: MouseEvent<HTMLButtonElement>) => {
    setDate({
      dateValue: event.currentTarget.name as string,
    });
  };

  const handleChangeDate = (event : ChangeEvent<HTMLInputElement>) => {
    setCalendarDate({
      dateValue: event.target.value,
    });
  };

  return (
    <div className={classes.catalogWrapper}>
      <Box>
        <AppDrawer
          isDrawer={isDrawer}
          typeCar={typeCar}
          setIsDrawer={setIsDrawer}
          setTypeCar={setTypeCar}
          setBrand={setBrand}
          handleReset={handleReset}
          handleSortDate={handleSortDate}
          handleChangeDate={handleChangeDate}
        />
        <Button onClick={handleDrawer} className={classes.filterBtn} variant="contained">Filter</Button>
      </Box>
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
