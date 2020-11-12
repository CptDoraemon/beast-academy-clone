import React, {useEffect, useState} from "react";

interface ScreenDimension {
  width: number,
  height: number
}

const ScreenContext = React.createContext<null | ScreenDimension>(null);

const useGetScreenDimension = () => {
  const [screen, setScreen] = useState<null | ScreenDimension>(null);

  useEffect(() => {
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }, []);

  return screen
};

export {ScreenContext, useGetScreenDimension}
