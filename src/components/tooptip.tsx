import React, {useEffect, useRef, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ReactDOM from 'react-dom';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    zIndex: theme.zIndex.tooltip,
  }
}));

interface TooltipMessageProps {
  message: string,
  x: number,
  y: number
}

const TooltipMessage: React.FC<TooltipMessageProps> = ({message, x, y}) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{left: x + 10, top: y - 10}}>
      {message}
    </div>
  )
};

interface TooltipProps {
  children: any,
  text: string
}

const Tooltip: React.FC<TooltipProps> = ({children, text}) => {
  const targetRef = useRef<HTMLElement>(null);
  const portalContainerRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  useEffect(() => {
    if (!targetRef.current) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      setIsHovering(true);
      setClientX(e.clientX);
      setClientY(e.clientY);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const targetEl = targetRef.current;
    targetEl.addEventListener('mousemove', handleMouseMove);
    targetEl.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      targetEl.removeEventListener('mousemove', handleMouseMove);
      targetEl.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, []);

  useEffect(() => {
    portalContainerRef.current = document.createElement('div');
    document.body.appendChild(portalContainerRef.current);
    return () => {
      if (!portalContainerRef.current) {
        return
      }
      portalContainerRef.current.parentElement?.removeChild(portalContainerRef.current);
      portalContainerRef.current = null;
    }
  }, []);


  return (
    <>
      { React.cloneElement(children, {...children.props, ref: targetRef}) }
      {
        isHovering && portalContainerRef.current &&
        ReactDOM.createPortal(<TooltipMessage message={text} x={clientX} y={clientY}/>, portalContainerRef.current)
      }
    </>
  )
};

export default Tooltip
