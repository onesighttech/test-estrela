import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { selectLogin } from "../features/login/loginSlice";

export default function PrivateRoute({ children, ...rest }) {
  const loggedIn = useSelector(selectLogin);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
