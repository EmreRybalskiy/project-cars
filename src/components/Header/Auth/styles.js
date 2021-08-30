import { makeStyles } from '@material-ui/core/styles';
import {
  teal, indigo, red, grey,
} from '@material-ui/core/colors';

const useStyles = makeStyles({
  dialogTitle: {
    textAlign: 'center',
    color: indigo[600],
  },
  formControl: {
    width: 500,
    height: 300,
    textAlign: 'center',
  },
  field: {
    margin: '10px auto',
    width: '80%',
    color: teal[400],
  },
  notValidField: {
    color: red[200],
  },
  link: {
    fontSize: 15,
    textDecoration: 'none',
    color: grey[900],
  },
  navItem: {
    textDecoration: 'none',
    color: grey[200],
  },
  formFooter: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navBtnBack: {
    textDecoration: 'none',
    color: indigo[800],
    fontWeight: 500,
    textTransform: 'uppercase',
    fontSize: 14,
  },
});

export default useStyles;
