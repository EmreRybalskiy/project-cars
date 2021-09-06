import React, { FC } from 'react';

// types
import { Cars } from 'types/cars';

// styles
import useStyles from './styles';

interface PaginationProps {
    carsPerPage: number;
    totalCars: Cars[];
    currentPage: number;
    paginate: (event: string) => void
}
// paginate
const Pagination: FC<PaginationProps> = ({
  carsPerPage, totalCars, currentPage, paginate,
}: PaginationProps) => {
  const classes = useStyles();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCars.length / carsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.paginationWrapper}>
      <ul className={classes.paginationList}>
        {pageNumbers.map((number) => (
          <li
            role="presentation"
            key={number}
            onClick={(event) => paginate(event.currentTarget.textContent as string)}
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
