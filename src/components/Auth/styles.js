import { makeStyles } from "@material-ui/core/styles";
import { grey, teal, indigo } from "@material-ui/core/colors";

export const useStyles = makeStyles({
  loginBtn: {
    color: grey[100],
  },
  dialogTitle: {
    textAlign: "center",
    color: indigo[600],
  },
  formControl: {
    width: 500,
    height: 200,
    textAlign: "center",
  },
  field: {
    margin: "20px auto",
    width: "80%",
    color: teal[400],
  },
});
