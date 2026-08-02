import arrowDown from "../assets/icons/arrow-down.png";
import { useState } from "react";

function TabContentMobie({ tab }) {
  const [open, setopen] = useState(false);

  const [activeMenu, setActiveMenu] = useState(0);

  const handleActiveMenu = () => {
    setopen(true);
  };

  const handleSelectMenu = (index) => {
    setActiveMenu(index);
    setopen(false); // chọn xong thì đóng dropdown
  };
  return (
    <div className="flex lg:hidden items-start px-[10px] pb-[10px] w-[220px] h-[46px] bg-white rounded-b-[24px] relative z-[50]">
      <button
        className="flex flex-row justify-center items-center p-0 px-3 gap-[5px] w-[200px] h-[36px] bg-[#2D2F33] rounded-[24px] flex-none order-0 grow-0"
        onClick={() => handleActiveMenu()}
      >
        <div className="flex justify-center items-center gap-[5px] w-[134px] h-[24px] flex-none order-1 grow">
          <img
            src={tab[activeMenu].icons}
            alt=""
            className="w-4 h-4 flex-none order-0 grow-0 brightness-0 invert"
          />
          <span className="w-[60px] h-[20px] font-manrope font-semibold text-[14px] leading-[20px] text-center text-white flex-none order-1">
            {tab[activeMenu].title}
          </span>
          {tab[activeMenu].status === true && (
            <div className="flex flex-row justify-center items-center px-2 py-1 gap-[10px] w-[40px] h-[24px] bg-[#BFFB4F] rounded-[24px] flex-none order-2 grow-0">
              <span className="w-6 h-4 font-manrope font-extrabold text-[10px] leading-4 text-center uppercase text-[#2D2F33] flex-none order-0">
                NEW
              </span>
            </div>
          )}
        </div>
        <img
          src={arrowDown}
          alt=""
          className="p-0 w-4 h-4 flex-none shrink-0 order-2 rotate-180 brightness-0 invert"
        />
      </button>
      {open && (
        <div
          className="absolute flex flex-col left-[20px] top-[37px]
        gap-[2px] items-start px-[10px] pb-[10px] w-[176px] h-[140px] bg-[#2D2F33] "
        >
          {tab.map((item, index) => (
            <div key={index}>
              <button
                className="flex flex-row justify-center items-center p-0 px-4 mt-1 gap-[5px] w-[160px] h-[36px] flex-none order-0 grow-0 hover:scale-110"
                onClick={() => handleSelectMenu(index)}
              >
                <div
                  className={`flex justify-center items-center gap-[5px] w-[134px] h-[24px] flex-none order-1 grow1`}
                >
                  <img
                    src={tab[index].icons}
                    alt=""
                    className={`w-4 h-4 flex-none order-0 grow-0 brightness-0 invert`}
                  />
                  <span className="w-[60px] h-[20px] font-manrope font-semibold text-[14px] leading-[20px] text-center text-white flex-none order-1">
                    {tab[index].title}
                  </span>
                  {/* {tab[index].status === true && (
                    <div className="flex flex-row justify-center items-center px-2 py-1 gap-[10px] w-[40px] h-[24px] bg-[#BFFB4F] rounded-[24px] flex-none order-2 grow-0">
                      <span className="w-6 h-4 font-manrope font-extrabold text-[10px] leading-4 text-center uppercase text-[#2D2F33] flex-none order-0">
                        NEW
                      </span>
                    </div>
                  )} */}
                  <div
                    className={`flex flex-row justify-center items-center px-2 py-1 gap-[10px] w-[40px] h-[24px] rounded-[24px] order-2 ${
                      tab[index].status === true
                        ? "bg-[#BFFB4F] visible"
                        : "invisible"
                    }`}
                  >
                    <span className="font-manrope font-extrabold text-[10px] leading-4 text-center uppercase text-[#2D2F33]">
                      NEW
                    </span>
                  </div>
                </div>
              </button>
              <div className="w-full items-center justify-center h-[1px] bg-[#D9D9D9]" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TabContentMobie;
