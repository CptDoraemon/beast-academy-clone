import React, {useEffect, useRef} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ThemeButton from "./theme-button";
import Tooltip from "./tooltip/tooltip";

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
    justifyContent: 'flex-end',
  },
  guest: {
    marginLeft: '10%',
    fontSize: '1.75rem',
    color: '#ffce41',
    filter: 'drop-shadow(3px 3px 0 rgba(0,0,0,.5))',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'row',
    '& img': {
      margin: '0 0 0 5px',
      width: '15%'
    }
  }
}));

const Header: React.FC = () => {
  const classes = useStyles();
  const centerGroupRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const centerButtonStyle = {width: '20%', margin: '0 5%', zIndex: 2, height: '100%'};

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


        <div style={{width: '17%', height: '100%', transform: 'translateX(10%)'}} className={classes.right}>
          <Tooltip text={'Profile'}>
            <ThemeButton
              iconSource={`${process.env.PUBLIC_URL}/assets/icons/default-avatar.svg`}
              backgroundSource={`${process.env.PUBLIC_URL}/assets/icons/button-surround.svg`}
              style={{width: '25%', height: '100%'}} title={'Profile'}
            />
          </Tooltip>
            <div className={classes.guest}>
              Guest
              <img src={`${process.env.PUBLIC_URL}/assets/icons/button-right-yellow.svg`} alt='profile more'/>
            </div>
        </div>
      </div>
    </div>
  )
};

export default Header
