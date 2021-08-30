import { makeStyles } from '@material-ui/core/styles';
import { teal, grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  footer: {
    textAlign: 'center',
    background: teal[400],
    minHeight: '60px',
  },
  footerText: {
    color: grey[50],
  },
});

export default useStyles;
