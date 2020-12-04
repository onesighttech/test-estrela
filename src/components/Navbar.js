import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin, setLogin } from "../features/login/loginSlice";
import { Link } from "react-router-dom";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Oleo Script Swash Caps",
    textTransform: "none",
  },
  grow: {
    flexGrow: 1,
  },
  root: {
    marginBottom: theme.spacing(2),
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const loggedIn = useSelector(selectLogin);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box className={classes.grow}>
            <Button color="inherit" component={Link} to="/">
              <Typography className={classes.title} variant="h5">
                Receitaria
              </Typography>
            </Button>
          </Box>
          <Button
            color="inherit"
            component={Link}
            to="/recipes"
            disabled={!loggedIn}
          >
            Recipes
          </Button>
          {loggedIn ? (
            <Button color="inherit" onClick={() => dispatch(setLogin(false))}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
