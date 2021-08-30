import { makeStyles } from '@material-ui/core/styles';

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
});

export default useStyles;
