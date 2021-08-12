import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    justifyContent: 'center',
    background: grey[200],
    minHeight: 'calc(100vh - 60px - 56px)',
  },
});

export default useStyles;
