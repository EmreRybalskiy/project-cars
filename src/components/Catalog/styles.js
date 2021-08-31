import { makeStyles } from '@material-ui/core/styles';
import { teal, grey } from '@material-ui/core/colors';

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
  filterBtn: {
    textDecoration: 'none',
    color: grey[200],
    backgroundColor: teal[400],
  },
  drawer: {
    maxWidth: '400px',
    backgroundColor: teal[400],
  },
  listWrapper: {
    width: '300px',
  },
  itemHolder: {
    width: '100%',
  },
  listItem: {
    width: '100%',
  },
  acceptBtnWarpper: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
});

export default useStyles;
