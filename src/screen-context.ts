import React, {useEffect, useState} from "react";

interface ScreenDimension {
  width: number,
  height: number,
  mainContainerWidth: number,
  mainContainerHeight: number
}

const ScreenContext = React.createContext<null | ScreenDimension>(null);

const useGetScreenDimension = () => {
  const [screen, setScreen] = useState<null | ScreenDimension>(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const mainContainerWHRatio = 1.33;
    let mainContainerWidth;
    let mainContainerHeight;

    const widthNeeded = screenHeight * mainContainerWHRatio;
    if (widthNeeded > screenWidth) {
      // use screenWidth as base
      mainContainerWidth = screenWidth;
      mainContainerHeight = mainContainerWidth / mainContainerWHRatio;
    } else {
      // use screenHeight as base
      mainContainerHeight = screenHeight;
      mainContainerWidth = mainContainerHeight * mainContainerWHRatio;
    }


    setScreen({
      width: screenWidth,
      height: screenHeight,
      mainContainerWidth,
      mainContainerHeight
    })
  }, []);

  return screen
};

export {ScreenContext, useGetScreenDimension}