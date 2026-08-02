import arrowDown from "../assets/icons/arrow-down.png";
import { useState, useRef, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";

function Navbar({ menus }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);
  // const menus = ["Giải pháp", "Thiết bị", "Bảng giá", "Hỗ trợ"];

  const handleClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="flex flex-row items-center p-0 gap-[4px] w-[373px] h-[40px] flex-none order-1 grow-0 "
      ref={menuRef}
    >
      {menus.map((menu, index) => (
        <div key={index} className="relative ">
          <button
            onClick={() => handleClick(index)}
            className={` flex flex-row items-center px-3 py-2 gap-2  h-[40px] rounded-[80px] flex-none`}
          >
            <span>{menu.title}</span>
            {menu.items && (
              <img
                src={arrowDown}
                alt="arrow"
                className={`w-4 h-4 flex-none order-1 ${
                  activeMenu !== index ? "rotate-180" : ""
                }`}
              />
            )}
          </button>
          {activeMenu === index && menu.items && (
            <DropdownMenu items={menu.items} className="" />
          )}
        </div>
      ))}
    </div>
  );
}

export default Navbar;
