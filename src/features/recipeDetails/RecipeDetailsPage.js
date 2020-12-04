import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRecipeDetails,
  saveRecipeDetailsAsync,
} from "./recipeDetailsSlice";
import { useParams } from "react-router-dom";
import { Grid, IconButton, Typography } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  secondTitle: {
    backgroundColor: theme.palette.primary.light,
    padding: "2px",
  },
  youtube: {
    color: theme.palette.youtube.main,
  },
  img: {
    maxWidth: "100%",
  },
}));

export default function RecipeDetailsPage() {
  const classes = useStyles();
  const recipeDetails = useSelector(selectRecipeDetails);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(saveRecipeDetailsAsync(id));
  }, [dispatch, id]);

  if (!recipeDetails) return null;

  const {
    name,
    category,
    thumb,
    youtube,
    instructions,
    ingredients,
  } = recipeDetails;

  return (
    <Grid container justify="center">
      <Grid container item md={6} xs={12}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            {name}
          </Typography>
        </Grid>
        <Grid container justify="center">
          <img className={classes.img} xs={12} src={thumb} alt={name} />
        </Grid>
        <Grid item xs={12}>
          <Typography color="secondary" variant="h6" align="right" gutterBottom>
            {category}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.secondTitle}
            align="center"
            variant="h5"
            gutterBottom
          >
            Ingredients
          </Typography>
        </Grid>

        <Grid container item>
          {ingredients.map((ingredient) => {
            return (
              <Fragment>
                <Grid item xs={6}>
                  <Typography variant="body1" color="textPrimary" gutterBottom>
                    {ingredient.name}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" color="textPrimary" gutterBottom>
                    {ingredient.measure}
                  </Typography>
                </Grid>
              </Fragment>
            );
          })}
        </Grid>

        <Grid item xs={12}>
          <Typography
            className={classes.secondTitle}
            align="center"
            variant="h5"
            gutterBottom
          >
            Instructions
          </Typography>
        </Grid>

        <Grid container item xs={12}>
          <Typography variant="body1" color="textPrimary" gutterBottom>
            {instructions}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <IconButton
            color="textPrimary"
            component="a"
            href={youtube}
            rel="noreferrer"
            target="_blank"
          >
            <YouTubeIcon className={classes.youtube} fontSize="large" />
            Watch this recipe on Youtube
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
