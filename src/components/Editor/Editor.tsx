import React, { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// MaterialUI
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
// Components
import Loader from 'src/UI/Loader';
import fetchUsers from 'src/store/actionCreator/user';
import MediaCard from '../MediaCard/MediaCard';
import CreateMediaCard from '../CreateMediaCard/CreateMediaCard';
// hook
import useTypeSelector from '../hooks/useTypeSelector';
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
        <Loader />
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
