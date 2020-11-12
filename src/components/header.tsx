import React, {useContext} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {

  }
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

    </div>
  )
};

export default Header
