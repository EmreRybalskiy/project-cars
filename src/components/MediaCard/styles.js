import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    width: '350px',
    maxHeight: '450px',
    borderRadius: '10px',
    padding: '0 10px',
    margin: '10px',
    transition: 'box-shadow 0.7s ease',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    height: 150,
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
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default useStyles;
