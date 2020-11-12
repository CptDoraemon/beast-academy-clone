import React, {useContext} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import HeaderButton from "./header-button";

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    position: 'absolute',
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
    height: '200%',
    position: 'relative'
  },
  centerButtonsGroupBackground: {
    position: 'absolute',
    width: '80%',
    height: '100%',
    top: 0,
    left: '10%',
    backgroundColor: '#ffce41',
  },
  centerButtonsGroupLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: '100%',
    borderRightWidth: '100%',
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderTopColor: 'transparent',
    borderRightColor: '#ffce41',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  }
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={process.env.PUBLIC_URL + '/assets/ba-top-bar.svg'} className={classes.background}/>
      <div className={classes.buttonsWrapper}>
        <HeaderButton iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-baHome.svg`} width={'9%'} height={'100%'} title={'home'}/>
        <HeaderButton iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-bell.svg`} width={'8%'} height={'100%'} title={'home'}/>
        <HeaderButton iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-book.svg`} width={'8%'} height={'100%'} title={'home'}/>
        <HeaderButton iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-projector.svg`} width={'8%'} height={'100%'} title={'home'}/>
        <div className={classes.centerButtonsGroup}>
          <div className={classes.centerButtonsGroupLeft}> </div>
          <div className={classes.centerButtonsGroupBackground}>

          </div>
        </div>
        <HeaderButton iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-help.svg`} width={'8%'} height={'100%'} title={'home'}/>
        <HeaderButton iconSource={`${process.env.PUBLIC_URL}/assets/icons/button-settings.svg`} width={'8%'} height={'100%'} title={'home'}/>

      </div>
    </div>
  )
};

export default Header
