import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const iconDefault = 'drop-shadow(3px 3px 0 rgba(0,0,0,.5))';
const iconHover = iconDefault + ' ' + 'drop-shadow(0 0 2px rgba(255,255,255,.9))';
const iconActive = 'drop-shadow(1px 1px 0 rgba(0,0,0,.5)) drop-shadow(0 0 1px rgba(255,255,255,.9))';
const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    backgroundColor: 'transparent',
    cursor: `url(${process.env.PUBLIC_URL + '/assets/cursors/wonky-hand-point.cur'}),pointer`,
    filter: iconDefault,
    '&:hover, &:focus': {
      filter: iconHover,
    },
    '&:active': {
      filter: iconActive,
      transform: `translate(2px, 2px)`
    },
    '&:focus': {
      outline: 'none'
    }
  },
  background: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 0,
    width: '100%',
    height: '100%',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    },
  },
  content: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      maxWidth: '100%',
      maxHeight: '100%'
    },
    '& span': {
      fontFamily: '"RobotoSlab", serif',
      // fontWeight: 500,
      textTransform: 'uppercase',
      wordSpacing: '100vw',
      fontSize: '0.875rem',
      lineHeight: 1.25
    }
  }
}));

interface HeaderButtonProps {
  iconSource?: string,
  backgroundSource?: string,
  style?: React.CSSProperties,
  title: string,
  isText?: boolean
}

const ThemeButton: React.FC<HeaderButtonProps> = ({iconSource, backgroundSource, style, title, isText = false}) => {
  const classes = useStyles();

  return (
    <button className={classes.root} style={{...style}} aria-label={title}>
      {backgroundSource && <div className={classes.background}><img src={backgroundSource} alt={title}/></div>}
      <div className={classes.content}>
        {iconSource && <img src={iconSource} alt={title}/>}
        {isText && <span>{title}</span>}
      </div>
    </button>
  )
};

export default ThemeButton
