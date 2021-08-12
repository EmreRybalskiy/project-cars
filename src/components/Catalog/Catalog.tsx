import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Material UI
import useTypeSelector from '../hooks/useTypeSelector';
import fetchUsers from '../../store/actionCreator/user';
// Components
import Loading from '../../UI/Loader';
import MediaCard from '../MediaCard/MediaCard';
// Styles
import useStyles from './styles';

const Catalog: FC = () => {
  const { users, error, loading } = useTypeSelector((state) => state.user);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (error) {
    return <p>Error</p>;
  }
  return (
    <div className={classes.holder}>
      {users.map((user) => (
        <MediaCard
          key={user.id}
          userName={user.name}
          company={user.company.name}
          email={user.email}
        />
      ))}
    </div>
  );
};

export default Catalog;
