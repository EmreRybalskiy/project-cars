import { makeStyles } from '@material-ui/core/styles';
import { teal, red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  catalogWrapper: {
    marginTop: '50px',
  },
  holder: {
    display: 'flex',
    flexFlow: 'row wrap',
    maxWidth: '1200px',
  },
  catalogContainer: {
    display: 'flex',
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
    color: teal[400],
    position: 'absolute',
    top: '75px',
    left: '100px',
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
  notFound: {
    color: red[500],
  },
});

export default useStyles;
