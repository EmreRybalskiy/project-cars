import React, { FC } from "react";

// Material Ui
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
// import list from "material-ui/svg-icons/action/list";

// styles
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    width: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "25px",
    padding: "0 10px",
    margin: "10px",
    transition: "box-shadow 0.7s ease",
  },
  media: {
    height: 140,
  },
  icon: {
    cursor: "pointer",
    fontSize: 30,
  },
  iconHolder: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
});

interface CardProps {
  userName: string;
  company: string;
  email: string;
}

const MediaCard: FC<CardProps> = ({ userName, company, email }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        {/* <CardMedia
          // component="img"
          className={classes.media}
          // image="../../img/img.jpeg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {userName}
          </Typography>
          <Typography gutterBottom component="p">
            Email: {email}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Company: {company}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      {location.pathname === "/editor" && (
        <CardActions className={classes.iconHolder}>
          <IconButton className={classes.icon}>
            <EditIcon color="primary" className={classes.icon} />
          </IconButton>
          <IconButton className={classes.icon}>
            <DeleteIcon color="secondary" className={classes.icon} />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
};
export default MediaCard;
