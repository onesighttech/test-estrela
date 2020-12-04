import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    marginTop: "auto",
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return <Box className={classes.root}>Test for Onesight</Box>;
}
