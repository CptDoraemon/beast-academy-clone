import React, {useContext, useEffect, useMemo, useRef, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {ScreenContext} from "../../screen-context";
import clsx from "clsx";

const useLoadImage = (src: string) => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImage(image)
    }
  }, [src]);

  return image
};

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative'
  },
  bg: {

  },
  content: {

  }
}));

interface FitContentInBgProps {
  children: React.ReactElement,
  bgSrc: string,
  x: number, // [0, 1] x start point of the content in the background
  y: number, // [0, 1] y start point of the content in the background
  w: number, // [0, 1] width of the content in the background
  h: number, // [0, 1] height of the content in the background
}

const FitContentInBg: React.FC<FitContentInBgProps> = ({children, bgSrc, x, y, w, h}) => {
  const classes = useStyles();
  const contentRef = useRef<HTMLElement>(null);
  const [dimension, setDimension] = useState<{ width: number, height: number } | null>(null);
  const image = useLoadImage(bgSrc);
  const isReady = image !== null && dimension !== null;

  const isDimensionSetRef = useRef(false);
  useEffect(() => {
    // set dimension after image is loaded
    if (isDimensionSetRef.current || image === null || !contentRef.current) {
      return
    }
    const rect = contentRef.current.getBoundingClientRect();
    const contentWidth = rect.width;
    const contentHeight = rect.height;
    const bgNaturalWidth = image.naturalWidth;
    const bgNaturalHeight = image.naturalHeight;
    const bgAllowedContentWHRatio = bgNaturalWidth * w / (bgNaturalHeight * h);
    const contentWHRatio = contentWidth / contentHeight;
    let filledContentWidth, filledContentHeight;
    if (contentWHRatio < bgAllowedContentWHRatio) {
      // use height
      filledContentHeight = contentHeight;
      filledContentWidth = contentHeight * bgAllowedContentWHRatio
    } else {
      // use width
      filledContentWidth = contentWidth;
      filledContentHeight = contentWidth / bgAllowedContentWHRatio;
    }
    isDimensionSetRef.current = true;
    setDimension({
      width: filledContentWidth / w,
      height: filledContentHeight / h
    })
  });

  if (!isReady) {
    return React.cloneElement(children, {...children.props, ref: contentRef})
  } else {
    return (
      <div className={classes.root}>
        <img src={bgSrc} className={classes.bg}/>
        <div className={classes.content}>
          { children }
        </div>
      </div>
    )
  }
};

export default FitContentInBg
