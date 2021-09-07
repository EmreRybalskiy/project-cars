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
    height: '200px',
    width: 'auto',
  },
  icon: {
    cursor: 'pointer',
    fontSize: 30,
  },
  iconHolder: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  create: {
    flexBasis: '70px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  delete: {
    width: 20,
  },
  categoryName: {
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 5,
    textDecoration: 'underline',
  },
  text: {
    marginLeft: '5px',
    fontSize: 18,
  },
});

export default useStyles;
