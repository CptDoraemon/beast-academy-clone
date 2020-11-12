import React, {useContext} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {ScreenContext} from "../screen-context";
import clsx from 'clsx';
import {createStyles} from "@material-ui/core";

const commonStyles = createStyles({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  triangleBorder: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
  },
  whiteBorder: {
    position: 'absolute',
    width: 10,
    height: '100%',
    backgroundColor: '#fff',
    top: 0,
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fullSize: {
    width: '100%',
    height: '100%'
  },
  background1: {
    ...commonStyles.absolute,
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/patch-blue-bright.png'})`,
    zIndex: -1,
  },
  background2: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/mathjazz.svg'})`
  },
  mainContentWrapper: {
    maxWidth: '1400px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainContentBorder: {
    width: 100,
    height: '100%',
    position: 'relative',
  },
  leftTopBorder: {
    ...commonStyles.triangleBorder,
    top: 0,
    right: 0,
    borderLeftWidth: 100,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderTopColor: '#00b2dd',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  leftBottomBorder: {
    ...commonStyles.triangleBorder,
    top: 0,
    right: 0,
    borderLeftWidth: 75,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomColor: '#00b2dd',
    borderTopColor: '#transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  leftWhiteBorder: {
    ...commonStyles.whiteBorder,
    right: 0
  },
  rightTopBorder: {
    ...commonStyles.triangleBorder,
    top: 0,
    left: 0,
    borderLeftWidth: 100,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftColor: '#00b2dd',
    borderBottomColor: 'transparent',
    borderTop: 'transparent',
    borderRightColor: 'transparent',
  },
  rightBottomBorder: {
    ...commonStyles.triangleBorder,
    top: 0,
    left: 0,
    borderLeftWidth: 75,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderLeftColor: '#00b2dd',
    borderTopColor: '#transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
  },
  rightWhiteBorder: {
    ...commonStyles.whiteBorder,
    left: 0
  },
  mainContent: {
    flexGrow: 1,
    height: '100%',
    backgroundColor: 'green',
    boxShadow: 'inset 0 0 10px 10px rgba(0,0,0,0.2)'
  }
}));

const Home: React.FC = () => {
  const classes = useStyles();
  const screen = useContext(ScreenContext);

  return (
    <div style={{height: screen?.height}} className={classes.root}>
      <div className={clsx(classes.background1, classes.fullSize)}>
        <div className={clsx(classes.background2, classes.fullSize)}> </div>
      </div>
      <div className={clsx(classes.fullSize, classes.mainContentWrapper)}>
        <div className={classes.mainContentBorder}>
          <div className={classes.leftTopBorder} style={{borderTopWidth: screen?.height}}> </div>
          <div className={classes.leftBottomBorder} style={{borderBottomWidth: screen?.height}}> </div>
          <div className={classes.leftWhiteBorder}> </div>
        </div>
        <div className={classes.mainContent}>

        </div>
        <div className={classes.mainContentBorder}>
          <div className={classes.rightTopBorder} style={{borderTopWidth: screen?.height}}> </div>
          <div className={classes.rightBottomBorder} style={{borderBottomWidth: screen?.height}}> </div>
          <div className={classes.rightWhiteBorder}> </div>
        </div>
      </div>
    </div>
  )
};

export default Home
