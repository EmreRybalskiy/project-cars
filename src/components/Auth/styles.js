import { makeStyles } from '@material-ui/core/styles';
import { grey, teal, indigo } from '@material-ui/core/colors';

const useStyles = makeStyles({
  loginBtn: {
    color: grey[100],
  },
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
});

export default useStyles;
