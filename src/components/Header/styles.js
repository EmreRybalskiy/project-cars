import { grey, teal } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    background: teal[400],
  },
  loginBtn: {
    color: grey[100],
  },
  authMenu: {
    display: 'flex',
  },
  navLogo: {
    textDecoration: 'none',
    color: grey[200],
  },
});

export default useStyles;
