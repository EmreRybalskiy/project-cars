import React, { FC, MouseEvent } from 'react';
import { Cars } from 'types/cars';
import useStyles from './styles';

interface PaginationProps {
    carsPerPage: number;
    totalCars: Cars[];
    currentPage: number;
    paginate: (event: MouseEvent<HTMLElement>) => void
}

const Pagination: FC<PaginationProps> = ({
  carsPerPage, totalCars, currentPage, paginate,
}: PaginationProps) => {
  const classes = useStyles();

  const pageNumbers = [];
  // console.log('TotalCars', totalCars);

  for (let i = 1; i <= Math.ceil(totalCars.length / carsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.paginationWrapper}>
      <ul className={classes.paginationList}>
        {pageNumbers.map((number) => (
          /* eslint-disable jsx-a11y/click-events-have-key-events,
            jsx-a11y/no-noninteractive-element-interactions */
          <li
            key={number}
            onClick={(event) => paginate(event as any)}
            className={`${classes.paginationItem} + ${number === currentPage && classes.paginationItemActive}`}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
