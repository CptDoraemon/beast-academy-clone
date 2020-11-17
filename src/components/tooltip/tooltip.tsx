import React, {useCallback, useEffect, useRef, useState} from "react";
import ReactDOM from 'react-dom';
import TooltipMessage from "./tooltip-message";

const HOVER_OUT_DELAY = 20;
const HOVER_IN_DELAY = 0;

interface TooltipProps {
  children: any,
  text: string,
  maxWidth: number
}

const Tooltip: React.FC<TooltipProps> = ({children, text, maxWidth}) => {
  const targetRef = useRef<HTMLElement>(null);
  const portalContainerRef = useRef<HTMLDivElement | null>(null);
  const hoverInTimer = useRef<null | number>(null);
  const hoverOutTimer = useRef<null | number>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  const clearTimer = useCallback(() => {
    if (hoverOutTimer.current !== null) {
      window.clearTimeout(hoverOutTimer.current);
      hoverOutTimer.current = null;
    }
    if (hoverInTimer.current !== null) {
      window.clearTimeout(hoverInTimer.current);
      hoverInTimer.current = null;
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent | React.MouseEvent) => {
    clearTimer();
    hoverInTimer.current = window.setTimeout(() => {
      setIsHovering(true);
    }, HOVER_IN_DELAY);
    setClientX(e.clientX);
    setClientY(e.clientY);
  }, [clearTimer]);

  const handleMouseLeave = useCallback((e: MouseEvent | React.MouseEvent) => {
    clearTimer();
    hoverOutTimer.current = window.setTimeout(() => {
      setIsHovering(false);
    }, HOVER_OUT_DELAY);
  }, [clearTimer]);

  useEffect(() => {
    return () => {
      clearTimer()
    }
  }, [clearTimer]);

  useEffect(() => {
    if (!targetRef.current) {
      return
    }

    const targetEl = targetRef.current;
    targetEl.addEventListener('mousemove', handleMouseMove);
    targetEl.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      targetEl.removeEventListener('mousemove', handleMouseMove);
      targetEl.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [handleMouseMove, handleMouseLeave]);

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
        ReactDOM.createPortal(<TooltipMessage message={text} x={clientX} y={clientY} handleMouseLeave={handleMouseLeave} handleMouseMove={handleMouseMove} maxWidth={maxWidth}/>, portalContainerRef.current)
      }
    </>
  )
};

export default Tooltip
