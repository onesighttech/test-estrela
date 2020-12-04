import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./app/PrivateRoute";
import LoginPage from "./features/login/LoginPage";
import RecipeDetailsPage from "./features/recipeDetails/RecipeDetailsPage";
import RecipesPage from "./features/recipeList/RecipesPage";
import Navbar from "./components/Navbar";
import { Container, makeStyles } from "@material-ui/core";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Navbar />
        <Container>
          <Switch>
            <PrivateRoute path="/recipes/:id">
              <RecipeDetailsPage />
            </PrivateRoute>
            <PrivateRoute path="/recipes">
              <RecipesPage />
            </PrivateRoute>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
