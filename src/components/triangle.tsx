import React, {useContext} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {}
}));

interface TriangleProps {

}

const Triangle: React.FC<TriangleProps> = () => {
  const classes = useStyles();

  return (
    <div>

    </div>
  )
};

export default Triangle
