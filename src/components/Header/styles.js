import { grey, teal } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    background: teal[400],
  },
  link: {
    fontSize: 15,
    textDecoration: 'none',
    color: grey[900],
  },
  hover: {
    '&:hover': {
      color: teal[400],
    },
  },
});

export default useStyles;
