import React, {useEffect, useState} from "react";

const useDynamicFontSize = ({ref, scale, max, min}: {ref: React.RefObject<HTMLElement>, scale?: number, max?:number, min?: number}) => {
  const [fontSizeStyle, setFontSizeStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (!ref.current) {
      return
    }
    const _scale = scale === undefined ? 20 : scale;
    const _min = min === undefined ? 8 : min;
    const _max = max === undefined ? 16 : max;
    const _fontSize = Math.floor(ref.current.getBoundingClientRect().width / _scale);
    setFontSizeStyle({
      fontSize: Math.max(Math.min(_fontSize, _max), _min)
    })
  }, [ref, scale, max, min]);

  return fontSizeStyle
};

export default useDynamicFontSize
