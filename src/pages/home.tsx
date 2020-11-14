import React, {useContext} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {ScreenContext} from "../screen-context";
import clsx from 'clsx';
import Header from "../components/header";
import Triangle from "../components/triangle";
import HomePaintings from "../components/home-paintings";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    '& img': {
      userSelect: 'none',
      userDrag: 'none'
    },
  },
  fullSize: {
    width: '100%',
    height: '100%'
  },
  background1: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/patch-blue-bright.png'})`,
    zIndex: -1,
  },
  background2: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/mathjazz.svg'})`
  },
  mainContentWrapper: {
    position: 'relative',
    border: '10px solid #fff',
    flexShrink: 0,
    boxShadow: 'inset 0 0 30px 10px rgba(0,0,0,0.2)',
  },
  mainContent: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  }
}));

const Home: React.FC = () => {
  const classes = useStyles();
  const screen = useContext(ScreenContext);

  if (screen === null) {
    return <></>
  }

  return (
    <div className={classes.root} style={{height: screen.height}}>
      <div className={clsx(classes.background1, classes.fullSize)}>
        <div className={clsx(classes.background2, classes.fullSize)}> </div>
      </div>
      <div className={classes.mainContentWrapper} style={{width: screen.mainContainerWidth, height: screen.mainContainerHeight, boxSizing: 'content-box'}}>
        {/* left */}
        <div>
          <Triangle width={100} height={screen.height} vertices={'1 1 1 0'} color={'#00b2dd'} style={{position: 'absolute', top: 0, left: -110}}/>
          <Triangle width={70} height={screen.height} vertices={'0 1 1 1'} color={'#00b2dd'} style={{position: 'absolute', top: 0, left: -80}}/>
        </div>
        {/* right */}
        <div>
          <Triangle width={70} height={screen.height} vertices={'1 1 0 1'} color={'#00b2dd'} style={{position: 'absolute', top: 0, right: -80}}/>
          <Triangle width={100} height={screen.height} vertices={'1 0 1 1'} color={'#00b2dd'} style={{position: 'absolute', top: 0, right: -110}}/>
        </div>
        {/* top */}
        <div>
          <Triangle width={screen.width} height={100} vertices={'1 0 1 1'} color={'#00b2dd'} style={{position: 'absolute', top: -110, left: 0}}/>
          <Triangle width={screen.width} height={70} vertices={'0 1 1 1'} color={'#00b2dd'} style={{position: 'absolute', top: -80, left: 0}}/>
        </div>
        {/* bottom */}
        <div>
          <Triangle width={screen.width} height={100} vertices={'1 1 1 0'} color={'#00b2dd'} style={{position: 'absolute', bottom: -110, left: 0}}/>
          <Triangle width={screen.width} height={70} vertices={'1 1 0 1'} color={'#00b2dd'} style={{position: 'absolute', bottom: -80, left: 0}}/>
        </div>

        <Header/>
        <div className={classes.mainContent}>
          <HomePaintings/>
        </div>
      </div>
    </div>
  )
};

export default Home
