import logo from "../assets/Logo/logo-v2.png";
import Isolation_Mode from "../assets/icons/Isolation_Mode.png";
import del from "../assets/icons/del.png";
import Navbar from "./Navbar";
import Login from "./Login";
import arrowDown from "../assets/icons/arrow-down.png";
import { useState, useRef, useEffect } from "react";
import Icons from "../assets/icons/icons.png";

function Menu() {
  const menus = [
    {
      title: "Giải pháp",
      items: [
        "Lorem ipsum dolor",
        "Sed do eiusmod tempor",
        "Lorem ipsum dolor",
        "Sed do eiusmod tempor",
      ],
    },
    {
      title: "Thiết bị",
      items: null,
    },
    {
      title: "Bảng giá",
      items: null,
    },
    {
      title: "Hỗ trợ",
      items: null,
    },
  ];
  const [activeMenu, setActiveMenu] = useState(null);
  const [OpenMenu, setOpenMenu] = useState(false);

  // const menuRef = useRef(null);

  const handleClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const ClickOpen = () => {
    setOpenMenu(true);
  };

  return (
    <nav className="lg:[w-full] bg-white h-[64px] lg:h-[96px] flex flex-col items-start p-0 relative z-[999]  order-0">
      <div className="w-screen box-border flex flex-row justify-between items-center py-4 px-5 lg:py-6 lg:px-[86px] gap-[10px] border-b border-b-[rgba(45,47,51,0.1)]">
        <img
          className=" mx-auto lg:mx-[20px] w-[93px] lg:w-[139px] h-[32px] lg:h-[48px] flex-none grow-0 "
          src={logo}
          alt=""
        />
        <div className="hidden lg:flex flex-row items-center  gap-[40px] mx-auto lg:mx-[20px] w-[755px] h-[48px]  flex-none order-1 grow-0 relative">
          <Navbar menus={menus} />
          <Login />
        </div>
        <div className="block lg:hidden  flex flex-row justify-center items-center p-0 gap-[10px] mx-auto w-[28px] h-[28px] flex-none order-1 grow-0 ">
          <button className="w-4 h-4 flex-none" onClick={ClickOpen}>
            <img src={Isolation_Mode} alt="" />
          </button>
          {OpenMenu && (
            <div className=" fixed z-[9999]  flex flex-col right-[0px] top-[0px] w-[390px] h-screen pb-[40px] bg-[#FAFAF5] border border-[rgba(45,47,51,0.1)]">
              <div className="flex flex-row justify-between items-center px-5 py-4 gap-[10px] w-[390px] h-[64px] flex-none order-1 self-stretch grow-0 z-[1]">
                <img
                  src={logo}
                  alt=""
                  className=" w-[93px] h-[32px] flex-none order-0 grow-0"
                />
                <div className="box-border flex flex-row justify-center items-center p-0 gap-[10px] w-[28px] h-[28px] bg-[#FAFAF5] mix-blend-multiply border-[0.5px] border-[rgba(45,47,51,0.1)] rounded-[8px] flex-none order-1 grow-0">
                  <button onClick={() => setOpenMenu(false)}>
                    <img
                      src={del}
                      alt=""
                      className="w-4 h-4 flex-none order-0 grow-0"
                    />
                  </button>
                </div>
              </div>
              <div className="order-2 flex flex-col gap-[10px] text-right pr-[50px] rounded">
                {menus.map((menu, index) => (
                  <div key={index}>
                    <button
                      onClick={() => handleClick(index)}
                      className="transition-transform duration-200 hover:scale-105"
                    >
                      <div className="flex flex-row text-right gap-[5px]">
                        <span className="font-manrope font-bold text-[16px] leading-[140%] text-[#2D2F33] border-b border-[#2D2F33]">
                          {menu.title}
                        </span>

                        <img
                          src={arrowDown}
                          alt="arrow"
                          className={`w-4 h-4 transition-transform duration-300 ${
                            menu.items
                              ? activeMenu === index
                                ? "rotate-0 visible"
                                : "rotate-180 visible"
                              : "invisible"
                          }`}
                        />
                      </div>
                    </button>
                    {activeMenu === index && menu.items && (
                      <div className="flex flex-col p-[5px] pr-[15px] gap-[5px]">
                        {menu.items &&
                          menu.items.map((item, i) => (
                            <button
                              key={i}
                              className="text-right transition-transform duration-200 hover:scale-105  underline decoration-[1px] underline-offset-2"
                            >
                              {item}
                            </button>
                          ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex flex-col justify-end items-end gap-[20px] mt-[20px]">
                  <button className=" box-border flex flex-row justify-center items-center w-[140px] h-[48px] border border-[rgba(45,47,51,0.2)] rounded-[80px]">
                    Đăng Nhập
                  </button>

                  <button className=" flex flex-row justify-center items-center px-5 py-3 gap-[6px] w-[203px] h-[48px] bg-[#BFFB4F] rounded-[80px]">
                    <span>Sử dụng miễn phí</span>
                    <img src={Icons} alt="" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Menu;
