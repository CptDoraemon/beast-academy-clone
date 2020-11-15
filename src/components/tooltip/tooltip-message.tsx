import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {useEffect, useMemo, useRef, useState} from "react";
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: '"RobotoSlab", serif',
    fontSize: '1.5rem',
    position: 'fixed',
    zIndex: theme.zIndex.tooltip,
  },
  innerWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  text: {
    position: 'absolute',
    display: 'block',
  },
  textDimension: {
    padding: '2px 5px',
    maxWidth: 500,
    textAlign: 'center'
  }
}));

interface TooltipMessageProps {
  message: string,
  x: number,
  y: number
}

const TooltipMessage: React.FC<TooltipMessageProps> = ({message, x, y}) => {
  const classes = useStyles();
  const textRef = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState<{width: number, height: number} | null>(null);

  useEffect(() => {
    if (!textRef.current) {
      return
    }
    const rect = textRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const textWHRatio = width / height;
    const svgTextBoxWHRatio = 3.7;
    const svgTextWidthPercentage = 0.7;
    const svgTextHeightPercentage = 0.41;
    let textBoxWidth, textBoxHeight;
    if (textWHRatio < svgTextBoxWHRatio) {
      // use height
      textBoxHeight = height;
      textBoxWidth = height * svgTextBoxWHRatio
    } else {
      // use width
      textBoxWidth = width;
      textBoxHeight = width / svgTextBoxWHRatio;
    }
    setDimension({
      width: textBoxWidth / svgTextWidthPercentage,
      height: textBoxHeight / svgTextHeightPercentage
    })
  }, []);

  const content = useMemo(() => {
    if (dimension === null) {
      return (
        <div className={clsx(classes.root, classes.textDimension)} style={{left: -9999, top: -9999}} ref={textRef}>
          {message}
        </div>
      )
    } else {
      // tooltip position relative to the pointer position
      // default top left
      const m = 5; // margin
      let left = x - dimension.width - m;
      let top = y - dimension.height - m;
      let imgScaleX = 1;
      let imgScaleY = 1;
      const textCenterX = '54%';
      const textCenterY = '58%';
      let textTranslateX = 1;
      let textTranslateY = 1;
      const auto = 'auto';
      const textStyle = {
        left: auto,
        top: auto,
        right: textCenterX,
        bottom: textCenterY,
        transform: ''
      };

      if (top < 0) {
        // flip top to bottom
        imgScaleY = -1;
        top = y + m;
        textStyle.top = textCenterY;
        textStyle.bottom = auto;
        textTranslateY = -1;
      }
      if (left < 0) {
        // flip left to right
        imgScaleX = -1;
        left = x + m;
        textStyle.right = auto;
        textStyle.left = textCenterX;
        textTranslateX = -1;
      }
      textStyle.transform = `translate(${textTranslateX * 50}%, ${textTranslateY * 50}%)`;

      const rootStyle = {
        left,
        top,
        width: dimension.width,
        height: dimension.height
      };

      const imgStyle = {
        transform: `scale(${imgScaleX}, ${imgScaleY}`,
      };

      return (
        <div className={classes.root} style={rootStyle} onMouseEnter={(e) => e.stopPropagation()}>
          <div className={classes.innerWrapper}>
            <img src={`${process.env.PUBLIC_URL}/assets/shapes/tooltip-small.svg`} alt={'tooltip'} className={classes.background} style={imgStyle}/>
            <span className={clsx(classes.text, classes.textDimension)} style={textStyle}>
            {message}
          </span>
          </div>
        </div>
      )
    }
  }, [classes, dimension, x, y, message]);

  return content
};

export default TooltipMessage
