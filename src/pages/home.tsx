import React, {useContext} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {ScreenContext} from "../screen-context";
import clsx from 'clsx';
import {createStyles} from "@material-ui/core";
import Header from "../components/header";
import Triangle from "../components/triangle";
import HomePaintings from "../components/home-paintings";

const commonStyles = createStyles({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
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
  leftWhiteBorder: {
    ...commonStyles.whiteBorder,
    right: 0
  },
  rightWhiteBorder: {
    ...commonStyles.whiteBorder,
    left: 0
  },
  mainContent: {
    position: 'relative',
    backgroundColor: '#fff',
    boxShadow: 'inset 0 0 10px 10px rgba(0,0,0,0.2)',
    overflow: 'hidden'
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
          <Triangle width={100} height={screen?.height || 0} vertices={'1 1 1 0'} color={'#00b2dd'} style={{position: 'absolute', top: 0, right: 0}}/>
          <Triangle width={70} height={screen?.height || 0} vertices={'0 1 1 1'} color={'#00b2dd'} style={{position: 'absolute', top: 0, right: 0}}/>
          <div className={classes.leftWhiteBorder}> </div>
        </div>
        <div className={classes.mainContent} style={{width: (screen?.height || 0) * 1.333, height: screen?.height}}>
          <Header/>
          <HomePaintings/>
        </div>
        <div className={classes.mainContentBorder}>
          <Triangle width={70} height={screen?.height || 0} vertices={'1 1 0 1'} color={'#00b2dd'} style={{position: 'absolute', top: 0, left: 0}}/>
          <Triangle width={100} height={screen?.height || 0} vertices={'1 0 1 1'} color={'#00b2dd'} style={{position: 'absolute', top: 0, left: 0}}/>
          <div className={classes.rightWhiteBorder}> </div>
        </div>
      </div>
    </div>
  )
};

export default Home
