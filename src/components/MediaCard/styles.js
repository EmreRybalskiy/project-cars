import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    width: '350px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '10px',
    padding: '0 10px',
    margin: '10px',
    transition: 'box-shadow 0.7s ease',
  },
  media: {
    height: 140,
  },
  icon: {
    cursor: 'pointer',
    fontSize: 30,
  },
  iconHolder: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default useStyles;
