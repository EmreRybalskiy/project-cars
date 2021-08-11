import React, { FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchUsers } from "../../store/actionCreator/user";

// Components
import Loading from "../../UI/Loader";
import MediaCard from "../MediaCard/MediaCard";
// Material UI
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Container } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { grey, teal } from "@material-ui/core/colors";
import CreateMediaCard from "../CreateMediaCard/CreateMediaCard";

const useStyles = makeStyles({
  holderCards: {
    display: "flex",
    flexFlow: "row wrap",
    maxWidth: 1200,
  },
  icon: {
    cursor: "pointer",
    fontSize: 30,
  },
  iconBack: {
    color: grey[700],
    fontSize: 30,
  },
  iconBackPosition: {
    position: "fixed",
    top: 70,
    left: 10,
  },
  iconAdd: {
    color: teal[400],
    fontSize: 50,
  },
  iconAddposition: {
    position: "fixed",
    bottom: 100,
    right: 100,
  },
});

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
        {users.map((user: any) => {
          return (
            <MediaCard
              key={user.id}
              userName={user.name}
              company={user.company.name}
              email={user.email}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Editor;
