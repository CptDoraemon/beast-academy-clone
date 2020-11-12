import React, {useContext} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const iconDefaultShadow = 'drop-shadow(3px 3px 0 rgba(0,0,0,.5))';
const iconHoverShadow = iconDefaultShadow + ' ' + 'drop-shadow(0 0 2px rgba(255,255,255,.9))';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    cursor: `url(${process.env.PUBLIC_URL + '/assets/cursors/wonky-hand-point.cur'}),pointer`,
    filter: iconDefaultShadow,
    '&:hover': {
      filter: iconHoverShadow,
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
