import { makeStyles } from '@material-ui/core/styles';
import { teal, indigo, green } from '@material-ui/core/colors';

const useStyles = makeStyles({
  holderCards: {
    display: 'flex',
    flexFlow: 'row wrap',
    maxWidth: 1200,
  },
  icon: {
    cursor: 'pointer',
    fontSize: 30,
  },
  iconAdd: {
    color: teal[400],
    fontSize: 50,
    zIndex: 999,
  },
  iconAddposition: {
    position: 'fixed',
    bottom: 100,
    right: 100,
  },
  cardCreator: {
    width: '100%',
    height: '100%',
  },
  formWrapper: {
    width: 500,
    height: 400,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: '100px 0',
  },
  heading: {
    color: indigo[600],
    fontWeight: 'bold',
    fontSize: '20px',
  },
  field: {
    marginBottom: 10,
    borderColor: 'yellow !important',
  },
  upload: {
    display: 'flex',
  },
  check: {
    color: green[600],
    margin: '5px 0 0 10px',
  },
  createBtn: {
    width: '20%',
    display: 'block',
    marginRight: '0',
    marginLeft: 'auto',
    fontWeight: 'bold',
  },
});

export default useStyles;
