import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownSvg } from "../../assets/crown.svg";
import "./Navigation.styles.scss";
import { UserContext } from "../../context/Context";
import { signout } from "../../util/firebase/firebase.utils";

export default function Navigation() {
  const { user, setUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signout();
    setUser(null);
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          {" "}
          <CrownSvg className="logo" />{" "}
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {user ? (
            <span className="nav-link" onClick={signOutHandler}>
              {" "}
              Logout{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
