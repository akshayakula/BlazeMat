/*eslint-disable*/
import React from "react";
import { Link }  from 'react-router-dom';
import PropTypes from "prop-types";
import cx from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import styles from "assets/jss/material-dashboard-pro-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { fluid, white, rtlActive } = props;
  var container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white,
  });
  var anchor =
    classes.a +
    cx({
      [" " + classes.whiteColor]: white,
    });
  var block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white,
  });
  return (
    <footer className={classes.footer}>
      <div className={container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link to='/' className={block}>
                Landing
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <Link to='/auth/login-page' className={block}>
                Login
            </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to='/auth/register-page' className={block}>
                Register
              </Link>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          &copy; {1900 + new Date().getYear()}{" "}
          <a
            href="https://www.blazesell.com"
            className={anchor}
            target="_blank"
          >
            Blazesell
          </a>
          , Inc.
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool,
};
