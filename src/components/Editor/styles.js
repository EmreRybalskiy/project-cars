import { makeStyles } from '@material-ui/core/styles';
import { grey, teal } from '@material-ui/core/colors';

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
  iconBack: {
    color: grey[700],
    fontSize: 30,
  },
  iconBackPosition: {
    position: 'fixed',
    top: 70,
    left: 10,
  },
  iconAdd: {
    color: teal[400],
    fontSize: 50,
  },
  iconAddposition: {
    position: 'fixed',
    bottom: 100,
    right: 100,
  },
});

export default useStyles;
