import { useSelector, useDispatch } from "react-redux";
import { saveCategoriesAsync, selectCategories } from "./categoriesSlice";
import { saveRecipesAsync, selectRecipes } from "./recipesSlice";
import Select from "react-select";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import theme from "../../css/MuiTheme";

import {
  Button,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
  button: {
    fontWeight: 800,
    marginRight: theme.spacing(1),
  },
}));

export default function RecipesPage() {
  const classes = useStyles();
  const categories = useSelector(selectCategories);
  const recipes = useSelector(selectRecipes);
  const dispatch = useDispatch();

  const oneCol = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    dispatch(saveCategoriesAsync());
  }, [dispatch]);

  return (
    <Grid container justify="center" spacing={4} className={classes.root}>
      <Grid container item justify="center" xs={12}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            Choose the type of food you want to see:
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Select
            options={categories}
            onChange={(option) => dispatch(saveRecipesAsync(option.value))}
          />
        </Grid>
      </Grid>

      <Grid container item justify="center" xs={12}>
        <GridList cellHeight={180} cols={oneCol ? 1 : 3}>
          {recipes.map((recipe) => (
            <GridListTile key={recipe.id}>
              <img src={recipe.thumb} alt={recipe.name} />
              <GridListTileBar
                title={recipe.name}
                actionIcon={
                  <Button
                    component={Link}
                    className={classes.button}
                    to={`/recipes/${recipe.id}`}
                    variant="outlined"
                    color="primary"
                  >
                    Details
                  </Button>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </Grid>
  );
}
