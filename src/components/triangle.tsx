import React, {useMemo} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
  }
}));

interface TriangleProps {
  width: number,
  height: number,
  vertices: string, // eg '1 1 1 0', top-left, top-right, bottom-right, bottom-left
  color: string,
  style?: React.CSSProperties
}

const Triangle: React.FC<TriangleProps> = ({width, height, vertices, color, style}) => {
  const classes = useStyles();

  const colors = useMemo(() => {
    const TRANSPARENT = 'transparent';
    if (vertices === '0 1 1 1') {
      return {
        top: TRANSPARENT,
        right: color,
        bottom: TRANSPARENT,
        left: TRANSPARENT,
      }
    } else if (vertices === '1 0 1 1') {
      return {
        top: TRANSPARENT,
        right: TRANSPARENT,
        bottom: TRANSPARENT,
        left: color,
      }
    } else if (vertices === '1 1 0 1') {
      return {
        top: TRANSPARENT,
        right: TRANSPARENT,
        bottom: TRANSPARENT,
        left: color,
      }
    } else {
      return {
        top: TRANSPARENT,
        right: color,
        bottom: TRANSPARENT,
        left: TRANSPARENT,
      }
    }
  }, [vertices, color]);


  const widths = useMemo(() => {
    if (vertices === '0 1 1 1') {
      return {
        top: height,
        right: width,
        bottom: 0,
        left: 0,
      }
    } else if (vertices === '1 0 1 1') {
      return {
        top: height,
        right: 0,
        bottom: 0,
        left: width,
      }
    } else if (vertices === '1 1 0 1') {
      return {
        top: 0,
        right: 0,
        bottom: height,
        left: width,
      }
    } else {
      return {
        top: 0,
        right: width,
        bottom: height,
        left: 0,
      }
    }
  }, [height, width, vertices]);

  const inlineStyle = useMemo(() => {
    return {
      borderTopWidth: widths.top,
      borderRightWidth: widths.right,
      borderBottomWidth: widths.bottom,
      borderLeftWidth: widths.left,
      borderTopColor: colors.top,
      borderRightColor: colors.right,
      borderBottomColor: colors.bottom,
      borderLeftColor: colors.left,
      ...style,
    }
  }, [colors, widths, style]);

  return (
    <div className={classes.root} style={inlineStyle}>

    </div>
  )
};

export default Triangle
