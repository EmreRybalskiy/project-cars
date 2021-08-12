import React, { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// MaterialUI
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
// Components
import Loading from '../../UI/Loader';
import MediaCard from '../MediaCard/MediaCard';
import CreateMediaCard from '../CreateMediaCard/CreateMediaCard';
// any
import useTypeSelector from '../hooks/useTypeSelector';
import fetchUsers from '../../store/actionCreator/user';
// styles
import useStyles from './styles';

const Editor: FC = () => {
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
    <Container>
      <NavLink to="/">
        <IconButton className={classes.iconBackPosition}>
          <KeyboardBackspaceIcon
            className={`${classes.icon} ${classes.iconBack}`}
          />
        </IconButton>
      </NavLink>
      <CreateMediaCard />
      <div className={classes.holderCards}>
        {users.map((user) => (
          <MediaCard
            key={user.id}
            userName={user.name}
            company={user.company.name}
            email={user.email}
          />
        ))}
      </div>
    </Container>
  );
};

export default Editor;
