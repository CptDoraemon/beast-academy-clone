import React, {useEffect, useMemo, useRef, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const iconDefault = 'drop-shadow(3px 3px 0 rgba(0,0,0,.5))';
const iconHover = iconDefault + ' ' + 'drop-shadow(0 0 2px rgba(255,255,255,.9))';
const iconActive = 'drop-shadow(1px 1px 0 rgba(0,0,0,.5)) drop-shadow(0 0 1px rgba(255,255,255,.9))';
const useStyles = makeStyles(theme => ({
  root: {
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
  inner: {
    position: 'relative',
    width: '100%',
    height: '100%'
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
      padding: '0 5% 0 0'
    },
    '& span': {
      fontFamily: '"RobotoSlab", serif',
      fontWeight: 500,
      textTransform: 'uppercase',
      wordSpacing: '100vw',
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

  const rootRef = useRef<HTMLButtonElement>(null);
  const [fontSize, setFontSize] = useState(0);
  useEffect(() => {
    if (!rootRef.current) {
      return
    }
    const lines = title.split(' ').length || 1;
    const rootHeight = rootRef.current.getBoundingClientRect().height;
    setFontSize(rootHeight / lines / 4);
  }, [title]);

  const iconStyle: React.CSSProperties = useMemo(() => {
    if (isText) {
      return {
        width: '15%',
        height: '100%',
        objectFit: 'contain'
      }
    } else {
      return {
        width: '70%',
        height: '70%',
        objectFit: 'contain'
      }
    }
  }, [isText]);

  return (
    <button className={classes.root} style={{...style}} aria-label={title} ref={rootRef}>
      <div className={classes.inner}>
        {backgroundSource && <div className={classes.background}><img src={backgroundSource} alt={title}/></div>}
        <div className={classes.content}>
          {iconSource && <img src={iconSource} alt={title} style={iconStyle}/>}
          {isText && <span style={{fontSize}}>{title}</span>}
        </div>
      </div>
    </button>
  )
};

export default ThemeButton