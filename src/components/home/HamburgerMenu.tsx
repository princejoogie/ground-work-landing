import React from "react";

interface HamburgerMenuProps {
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu = ({ click, setClick }: HamburgerMenuProps) => {
  return (
    <button
      type="button"
      onClick={() => setClick(!click)}
      className="md:hidden block"
    >
      <div className={`nav-menu ${click ? "open" : ""}`}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </button>
  );
};

export default HamburgerMenu;
