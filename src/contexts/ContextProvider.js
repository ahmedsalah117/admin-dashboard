import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  function setColor(color) {
    setCurrentColor(color);

    localStorage.setItem("colorTheme", color);
  }

  function setMode(e) {
    setCurrentMode(e.target.value);

    localStorage.setItem("modeTheme", e.target.value);
  }

  function getModeFromLocalStorage() {
    const mode = localStorage.getItem("modeTheme");
    setCurrentMode(mode);
  }

  function getColorFromLocalStorage() {
    const color = localStorage.getItem("colorTheme");
    setCurrentColor(color);
  }

  const handleClick = (clickedName) => {
    setIsClicked({
      ...initialState,
      [clickedName]: true,
    });
  };

  function closeNavIcons() {
    setIsClicked(initialState);
  }
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setColor,
        setMode,
        themeSettings,
        setThemeSettings,
        closeNavIcons,
        getModeFromLocalStorage,
        getColorFromLocalStorage,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
