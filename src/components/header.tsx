import React, {useContext} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ThemeButton from "./theme-button";

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
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
    backgroundColor: '#ffce41',
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
    userSelect: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    }
  }
}));

const Header: React.FC = () => {
  const classes = useStyles();

  const centerButtonStyle = {width: '20%', margin: '0 5%', zIndex: 2, height: '100%'};

  return (
    <div className={classes.root}>
      <img src={process.env.PUBLIC_URL + '/assets/ba-top-bar.svg'} className={classes.background}/>
      <div className={classes.buttonsWrapper}>
        <ThemeButton iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-baHome.svg`} style={{width: '9%', height: '100%'}} title={'home'}/>
        <ThemeButton iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-bell.svg`} style={{width: '8%', height: '100%'}} title={'home'}/>
        <ThemeButton iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-book.svg`} style={{width: '8%', height: '100%'}} title={'home'}/>
        <ThemeButton iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-projector.svg`} style={{width: '8%', height: '100%'}} title={'home'}/>
        <div className={classes.centerButtonsGroup}>
          <div className={classes.centerButtonsGroupBackground}> </div>
          <ThemeButton backgroundSource={`${process.env.PUBLIC_URL}/assets/shapes/octagon.svg`} style={centerButtonStyle} title={'learn more'} isText={true}/>
          <span className={classes.centerTitle}>DEMO</span>
          <ThemeButton backgroundSource={`${process.env.PUBLIC_URL}/assets/shapes/octagon.svg`} style={centerButtonStyle} title={'enroll now'} isText={true}/>
        </div>
        <ThemeButton iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-help.svg`} style={{width: '8%', height: '100%'}} title={'home'}/>
        <ThemeButton iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-settings.svg`} style={{width: '8%', height: '100%'}} title={'home'}/>

      </div>
    </div>
  )
};

export default Header
