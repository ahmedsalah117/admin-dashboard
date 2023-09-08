import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, icon, color, customFunc, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        style={{ color }}
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize && screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 relative md:mx-6">
      <NavButton
        title="Menu"
        customFunc={() => {
          setActiveMenu((prevState) => !prevState);
        }}
        icon={<AiOutlineMenu />}
        color={currentColor}
      />

      <div className="flex">
        <NavButton
          title="cart"
          customFunc={() => handleClick("cart")}
          icon={<FiShoppingCart />}
          color={currentColor}
        />
        <NavButton
          title="chat"
          customFunc={() => handleClick("chat")}
          icon={<BsChatLeft />}
          color={currentColor}
          dotColor="#03C9D7"
        />
        <NavButton
          title="notifications"
          customFunc={() => handleClick("notification")}
          icon={<RiNotification3Line />}
          color={currentColor}
          dotColor="#03C9D7"
        />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer hover:bg-light-gray rounded-lg p-1"
            onClick={() => {
              handleClick("userProfile");
            }}
          >
            <img src={avatar} alt="profile" className="w-8 h-8 rounded-full" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>
              <span className="text-gray-400 text-14 font-bold">Ahmed</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
