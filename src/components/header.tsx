import React, {useCallback, useEffect, useRef, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ThemeButton from "./buttons/theme-button";
import Tooltip from "./tooltip/tooltip";

const usePullOut = () => {
  const [isPullOutActive, setIsPullOutActive] = useState(false);
  const timerRef = useRef<null | number>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const makePullOutActive = useCallback(() => {
    clearTimer();
    setIsPullOutActive(true)
  }, [clearTimer]);

  const makePullOutInactive = useCallback(() => {
    clearTimer();
    timerRef.current = window.setTimeout(() => {
      setIsPullOutActive(false);
    }, 50)
  }, [clearTimer]);

  useEffect(() => {
    return () => {
      clearTimer()
    }
  }, [clearTimer]);

  return {
    isPullOutActive,
    makePullOutActive,
    makePullOutInactive
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    height: '10%',
    position: 'absolute',
    zIndex: theme.zIndex.appBar,
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    filter: 'drop-shadow(0 0 .4rem rgba(0,0,0,.9))',
    cursor: ''
  },
  background: {
    width: '100%',
  },
  buttonsWrapper: {
    width: '96%',
    height: '70%',
    position: 'absolute',
    left: '2%',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  centerButtonsGroup: {
    width: '33%',
    height: '150%',
    position: 'relative',
    top: '25%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  centerButtonsGroupBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    // backgroundColor: '#ffce41',
    zIndex: 1
  },
  centerTitle: {
    display: 'block',
    width: '40%',
    textAlign: 'center',
    fontFamily: '"RobotoSlab", serif',
    fontWeight: 700,
    fontSize: '2.8rem',
    zIndex: 2,
    color: 'rgb(204,154,66)',
    textShadow: '1px 1px 1px rgba(0,0,0,0.5)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    }
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0
  },
  guest: {
    fontSize: '1.75rem',
    color: '#ffce41',
    filter: 'drop-shadow(3px 3px 0 rgba(0,0,0,.5))',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
    '& img': {
      margin: '0 0 0 5px',
      width: '15%'
    },
  },
  pullOut: {
    position: 'absolute',
    transition: theme.transitions.create('transform'),
    zIndex: -1
  }
}));

const Header: React.FC = () => {
  const classes = useStyles();
  const centerGroupRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const centerButtonStyle = {width: '20%', margin: '0 5%', zIndex: 2, height: '100%'};
  const {
    isPullOutActive,
    makePullOutActive,
    makePullOutInactive
  } = usePullOut();

  useEffect(() => {
    if (!canvasRef.current || !centerGroupRef.current) {
      return
    }

    const width = centerGroupRef.current.getBoundingClientRect().width;
    const height = centerGroupRef.current.getBoundingClientRect().height;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    if (!ctx) {
      return;
    }

    const left = 0.03 * width;
    const right = 0.02 * width;
    const mid = width - left - right;
    ctx.fillStyle = '#ffce41';
    ctx.beginPath();
    ctx.moveTo(left, 0);
    ctx.lineTo(left + mid, 0);
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.fill();

  }, []);

  return (
    <div className={classes.root}>
      <img src={process.env.PUBLIC_URL + '/assets/ba-top-bar.svg'} className={classes.background}/>
      <div className={classes.buttonsWrapper}>
        <Tooltip text={'Home'}>
          <ThemeButton iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-baHome.svg`} style={{width: '9%', height: '100%'}} title={'Home'}/>
        </Tooltip>
        <Tooltip text={'Class'}>
          <ThemeButton iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-bell.svg`} style={{width: '8%', height: '100%'}} title={'Class'}/>
        </Tooltip>
        <Tooltip text={'Library'}>
          <ThemeButton iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-book.svg`} style={{width: '8%', height: '100%'}} title={'Library'}/>
        </Tooltip>
        <Tooltip text={'Theater'}>
          <ThemeButton iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-projector.svg`} style={{width: '8%', height: '100%'}} title={'Theater'}/>
        </Tooltip>

        {/* center groups */}
        <div className={classes.centerButtonsGroup} ref={centerGroupRef}>
          <canvas ref={canvasRef} width={1} height={1} className={classes.centerButtonsGroupBackground}/>
          <ThemeButton backgroundSource={`${process.env.PUBLIC_URL}/assets/shapes/octagon.svg`} style={centerButtonStyle} title={'learn more'} isText={true}/>
          <span className={classes.centerTitle}>DEMO</span>
          <ThemeButton backgroundSource={`${process.env.PUBLIC_URL}/assets/shapes/octagon.svg`} style={centerButtonStyle} title={'enroll now'} isText={true}/>
        </div>


        <Tooltip text={'Help'}>
          <ThemeButton iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-help.svg`} style={{width: '8%', height: '100%'}} title={'Help'}/>
        </Tooltip>
        <Tooltip text={'Settings'}>
          <ThemeButton iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-settings.svg`} style={{width: '8%', height: '100%'}} title={'Settings'}/>
        </Tooltip>

        <Tooltip text={'Profile'}>
          <ThemeButton
            style={{width: '8%', height: '80%'}}
            iconSource={`${process.env.PUBLIC_URL}/assets/icons/default-avatar.svg`}
            backgroundSource={`${process.env.PUBLIC_URL}/assets/icons/button-surround.svg`}
            title={'Profile'}
          />
        </Tooltip>

        <div style={{width: '8%', height: '100%'}} className={classes.right}>
          <div className={classes.guest}>
            Guest
            <img src={`${process.env.PUBLIC_URL}/assets/icons/button-right-yellow.svg`} alt='profile more'/>
          </div>
        </div>

        {/* hover detection for pullout */}
        <div
          style={{width: '10%', height: '100%', position: 'absolute', right: '-2%'}}
          onMouseEnter={makePullOutActive} onMouseLeave={makePullOutInactive}
        >
        </div>

        <div style={{width: '8%', height: '100%', top: '15%', right: 0, transform: `translateX(${isPullOutActive ? '50%' : '-100%'})`}} className={classes.pullOut} onMouseEnter={makePullOutActive} onMouseLeave={makePullOutInactive}>
          <ThemeButton title={'EXIT'} backgroundSource={`${process.env.PUBLIC_URL}/assets/shapes/quad4.svg`} style={{width: '200%', height: '100%'}} isText textStyle={{color: '#ffce41'}}/>
        </div>
      </div>
    </div>
  )
};

export default Header
