import Typography from "@material-ui/core/Typography";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontFamily: "Oleo Script Swash Caps",
  },
  root: {
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
    height: "100vh",
  },
}));

export default function HomePage() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={12}>
        <Typography className={classes.title} align="center" variant="h2">
          Receitaria
        </Typography>
      </Grid>
    </Grid>
  );
}
