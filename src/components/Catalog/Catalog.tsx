import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchUsers } from "../../store/actionCreator/user";
import Loading from "../../UI/Loader";
import MediaCard from "../MediaCard/MediaCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  holder: {
    display: "flex",
    flexFlow: "row wrap",
    maxWidth: "1200px",
  },
});

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
  );
};

export default Catalog;
