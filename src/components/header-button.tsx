import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const iconDefault = 'drop-shadow(3px 3px 0 rgba(0,0,0,.5))';
const iconHover = iconDefault + ' ' + 'drop-shadow(0 0 2px rgba(255,255,255,.9))';
const iconActive = 'drop-shadow(1px 1px 0 rgba(0,0,0,.5)) drop-shadow(0 0 1px rgba(255,255,255,.9))';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    cursor: `url(${process.env.PUBLIC_URL + '/assets/cursors/wonky-hand-point.cur'}),pointer`,
    filter: iconDefault,
    '&:hover': {
      filter: iconHover,
    },
    '&:active': {
      filter: iconActive,
      transform: `translate(2px, 2px)`
    },
    '& img': {
      maxWidth: '100%',
      maxHeight: '100%'
    }
  },
}));

interface HeaderButtonProps {
  iconSource: string,
  width: string,
  height: string,
  title: string
}

const HeaderButton: React.FC<HeaderButtonProps> = ({iconSource, width, height, title}) => {
  const classes = useStyles();

  return (
    <button className={classes.root} style={{width, height}} aria-label={title}>
      <img src={iconSource} alt={title}/>
    </button>
  )
};

export default HeaderButton
