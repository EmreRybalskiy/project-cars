import { makeStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

const useStyles = makeStyles({
  holder: {
    display: 'flex',
    flexFlow: 'row wrap',
    maxWidth: '1200px',
  },
  paginationWrapper: {
    margin: '20px',
  },
  paginationList: {
    margin: '0',
    padding: '0',
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
  },
  paginationItem: {
    cursor: 'pointer',
    color: teal[400],
    border: `1px solid ${teal[400]}`,
    margin: '0 3px',
    padding: '2px 4px',
  },
  paginationItemActive: {
    backgroundColor: `${teal[400]}`,
    color: teal[100],
  },
});

export default useStyles;
