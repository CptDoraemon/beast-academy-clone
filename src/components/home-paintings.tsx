import React, {useEffect, useMemo, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ThemeButton from "./theme-button";
import Tooltip from "./tooltip/tooltip";

const zIndices = {
  sky: 1,
  underSky: 2,
  button: 99
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  sky: {
    zIndex: zIndices.sky,
    position: 'absolute',
    top: '-1%',
    left: '-1%',
    width: '102%',
  },
  skyHazeLeft: {
    zIndex: zIndices.underSky,
    position: 'absolute',
    top: '4.1%',
    left: '-1%',
    height: '17.2%',
  },
  skyHazeRight: {
    zIndex: zIndices.underSky,
    position: 'absolute',
    top: '12%',
    right: '-1%',
    height: '17.5%',
  },
  cloud1: {
    zIndex: zIndices.underSky,
    position: 'absolute',
    top: '9%',
    left: '0%',
    height: '15%',
    animation: '$cloudFloating 40s infinite linear',
    animationDelay: '-10s'
  },
  cloud2: {
    zIndex: zIndices.underSky,
    position: 'absolute',
    top: '28%',
    height: '7%',
    animation: '$cloudFloating 60s infinite linear',
    animationDelay: '-20s'
  },
  cloud3: {
    zIndex: 6,
    position: 'absolute',
    top: '13.5%',
    height: '13%',
    animation: '$cloudFloating 50s infinite linear',
    animationDelay: '-30s'
  },
  '@keyframes cloudFloating': {
    '0%': {transform: 'translateX(-20vw)'},
    '100%': {transform: 'translateX(100vw)'},
  },
  mountain: {
    zIndex: 3,
    position: 'absolute',
    bottom: '34.4%',
    left: '-1.1%',
    width: '102.5%',
  },
  hillRangeBack: {
    position: 'absolute',
    zIndex: 4,
    left: '36.4%',
    top: '27%',
    width: '54%'
  },
  hillRangeFront: {
    position: 'absolute',
    zIndex: 4,
    left: '-1.1%',
    top: '22.5%',
    width: '103%'
  },
  hillBackLeft: {
    position: 'absolute',
    zIndex: 6,
    left: '16.7%',
    top: '44.5%',
    width: '32.4%',
    height: '21.8%',
  },
  hillBackRight: {
    position: 'absolute',
    zIndex: 6,
    right: '18.4%',
    top: '41.9%',
    width: '34.1%',
    height: '30.3%',
  },
  hillFrontLeft: {
    position: 'absolute',
    zIndex: 7,
    left: '-1%',
    height: '39%',
    top: '34.7%',
  },
  hillFrontRight: {
    position: 'absolute',
    zIndex: 7,
    right: '-.6%',
    top: '45.4%',
    width: '33.1%',
    height: '30.3%',
  },
  hill: {
    position: 'absolute',
    zIndex: 9,
    width: '100%',
    bottom: '-1px',
  },
  bush1: {
    position: 'absolute',
    zIndex: 11,
    left: '-.1%',
    height: '8.5%',
    bottom: '18%'
  },
  bush2: {
    position: 'absolute',
    zIndex: 11,
    left: '15.5%',
    height: '12.5%',
    bottom: '4.9%'
  },
  tree1: {
    position: 'absolute',
    zIndex: 11,
    right: '5.2%',
    height: '17.1%',
    bottom: '2%',
  },
  tree2: {
    position: 'absolute',
    zIndex: 9,
    left: '7%',
    bottom: '55.8%',
    height: '5.8%'
  },
  tree3: {
    position: 'absolute',
    zIndex: 9,
    left: '2.5%',
    bottom: '61.8%',
    height: '5.3%'
  },
  tree4: {
    position: 'absolute',
    zIndex: 9,
    left: '34.7%',
    height: '16.8%',
    bottom: '48.8%'
  },
  tree5: {
    position: 'absolute',
    zIndex: 9,
    right: '24.7%',
    height: '6.5%',
    bottom: '46.2%',
  },
  tree6: {
    position: 'absolute',
    zIndex: 9,
    right: '.3%',
    height: '26.7%',
    bottom: '43.7%',
  },
  lab: {
    position: 'absolute',
    zIndex: 8,
    height: '55.9%',
    bottom: '32%',
    left: '.4%'
  },
  theatre: {
    position: 'absolute',
    zIndex: 10,
    height: '31.3%',
    bottom: '25.2%',
    right: '5.2%'
  },
  library: {
    position: 'absolute',
    zIndex: 10,
    height: '30.6%',
    bottom: '25.1%',
    left: '1.1%'
  },
  school: {
    position: 'absolute',
    zIndex: 10,
    height: '52.7%',
    bottom: '19.4%',
    left: '28.3%'
  },
  clock: {
    position: 'absolute',
    zIndex: 14,
    left: '46.4%',
    height: '5.9%',
    width: '4.5%',
    bottom: '46.2%'
  },
  clockFace: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  clockMinuteWrapper: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    animation: '$clockHand 3600s infinite linear',
  },
  clockHourWrapper: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    animation: '$clockHand 43200s infinite linear',
  },
  clockSecondWrapper: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    animation: '$clockHand 60s infinite steps(60)',
  },
  clockMinuteImage: {
    position: 'absolute',
    height: '35%',
    left: '50%',
    bottom: '45%',
    transform: 'translateX(-50%)'
  },
  clockHourImage: {
    position: 'absolute',
    height: '30%',
    left: '50%',
    bottom: '43%',
    transform: 'translateX(-50%)'
  },
  clockSecondImage: {
    position: 'absolute',
    height: '45%',
    width: 1,
    backgroundColor: '#7f3e1c',
    left: '50%',
    bottom: '43%',
    transform: 'translateX(-50%)'
  },
  '@keyframes clockHand': {
    '0%': {transform: 'rotate(0deg)'},
    '100%': {transform: 'rotate(360deg)'},
  },
}));

interface HomePaintingsProps {
}

const HomePaintings: React.FC<HomePaintingsProps> = () => {
  const classes = useStyles();

  const styles = useMemo(() => {
    const date = new Date(Date.now());
    const second = date.getSeconds();
    const minuteInSeconds = date.getMinutes() * 60 + second;
    const hourInSeconds = date.getHours() % 12 * 3600 + minuteInSeconds;
    const hourHandStyle = {
      'transform': `rotate(${hourInSeconds / (3600 * 12) * 360}deg)`,
      'animationDelay': `${-hourInSeconds}s`
    };
    const minuteHandStyle = {
      'transform': `rotate(${minuteInSeconds / 3600 * 360}deg)`,
      'animationDelay': `${-minuteInSeconds}s`
    };
    const secondHandStyle = {
      'transform': `rotate(${second * 6}deg)`,
      'animationDelay': `${-second}s`
    };
    return {
      hourHandStyle,
      minuteHandStyle,
      secondHandStyle
    }
  }, []);

  return (
    <div className={classes.root}>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-sky.svg`} className={classes.sky} alt={'sky'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-skyhaze-left.svg`} className={classes.skyHazeLeft} alt={'skyHazeLeft'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-skyhaze-right.svg`} className={classes.skyHazeRight} alt={'skyHazeRight'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-clouds-left.svg`} className={classes.cloud1} alt={'cloud1'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-clouds-left-small.svg`} className={classes.cloud2} alt={'cloud2'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-clouds-right.svg`} className={classes.cloud3} alt={'cloud3'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-mountains.svg`} className={classes.mountain} alt={'mountain'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-hill-range-back.svg`} className={classes.hillRangeBack} alt={'hillRangeBack'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-hill-range-front.svg`} className={classes.hillRangeFront} alt={'hillRangeFront'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-hill-back-left.svg`} className={classes.hillBackLeft} alt={'hillBackLeft'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-hill-back-right.svg`} className={classes.hillBackRight} alt={'hillBackRight'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-hill-front-left.svg`} className={classes.hillFrontLeft} alt={'hillFrontLeft'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-hill-front-right.svg`} className={classes.hillFrontRight} alt={'hillFrontRight'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-hill-center.svg`} className={classes.hill} alt={'hill'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-bush-left.svg`} className={classes.bush1} alt={'bush1'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-bush-front.svg`} className={classes.bush2} alt={'bush2'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-tree-front.svg`} className={classes.tree1} alt={'tree1'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-one-tree-left.svg`} className={classes.tree2} alt={'tree2'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-two-trees-left.svg`} className={classes.tree3} alt={'tree3'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-five-trees-left.svg`} className={classes.tree4} alt={'tree4'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-four-trees-right.svg`} className={classes.tree5} alt={'tree5'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-six-trees-right.svg`} className={classes.tree6} alt={'tree6'}/>
      <Tooltip text={'The full version of BA Online includes a Puzzle Lab with more than 250 puzzles that complement the standard lessons.'}>
        <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-lab.svg`} className={classes.lab} alt={'lab'}/>
      </Tooltip>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/theater-text-13.svg`} className={classes.theatre} alt={'theatre'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-library.svg`} className={classes.library} alt={'library'}/>
      <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-main-building.svg`} className={classes.school} alt={'school'}/>

      {/* clock */}
      <div className={classes.clock}>
        <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-clock-face.svg`} className={classes.clockFace} alt={'clockFace'}/>
        <div className={classes.clockMinuteWrapper} style={styles.minuteHandStyle}>
          <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-clock-minute-hand.svg`} className={classes.clockMinuteImage} alt={'clockMinuteImage'}/>
        </div>
        <div className={classes.clockHourWrapper} style={styles.hourHandStyle}>
          <img src={`${process.env.PUBLIC_URL}/assets/paintings/homescreen-clock-hour-hand.svg`} className={classes.clockHourImage} alt={'clockHourImage'}/>
        </div>
        <div className={classes.clockSecondWrapper} style={styles.secondHandStyle}>
          <div className={classes.clockSecondImage}> </div>
        </div>
      </div>

      {/* buttons */}
      <ThemeButton
        title={'library'} backgroundSource={`${process.env.PUBLIC_URL}/assets/shapes/quad.svg`} isText={true}
        iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-book-white.svg`}
        style={{
          position: "absolute",
          zIndex: zIndices.button,
          left: '6.5%',
          bottom: '19.2%',
          height: '8.5%',
          width: '16%'
        }}
      />
      <ThemeButton
        title={'class'} backgroundSource={`${process.env.PUBLIC_URL}/assets/shapes/quad2.svg`} isText={true}
        iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-bell-white.svg`}
        style={{
          position: "absolute",
          zIndex: zIndices.button,
          left: '39.1%',
          bottom: '11.8%',
          height: '9.5%',
          width: '20%'
        }}
      />
      <ThemeButton
        title={'theater'} backgroundSource={`${process.env.PUBLIC_URL}/assets/shapes/quad3.svg`} isText={true}
        iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-projector-white.svg`}
        style={{
          position: "absolute",
          zIndex: zIndices.button,
          left: '76.2%',
          bottom: '16.5%',
          height: '9.5%',
          width: '15.5%',
        }}
      />
    </div>
  )
};

export default HomePaintings
