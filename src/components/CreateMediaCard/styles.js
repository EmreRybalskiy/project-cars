import { makeStyles } from '@material-ui/core/styles';
import { teal, indigo } from '@material-ui/core/colors';

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
  holderDialog: {
    width: 600,
    height: 400,
    textAlign: 'center',
  },
  dialogTitle: {
    color: indigo[600],
  },
  formControl: {
    width: '80%',
  },
  field: {
    marginBottom: 10,
    borderColor: 'yellow !important',
  },
});

export default useStyles;
