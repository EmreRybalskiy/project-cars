import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  icon: {
    cursor: 'pointer',
    fontSize: 30,
  },
  iconBack: {
    color: grey[700],
    fontSize: 30,
  },
  iconBackPosition: {
    position: 'fixed',
    top: 70,
    left: 10,
  },
});

export default useStyles;
