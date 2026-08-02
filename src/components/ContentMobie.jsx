import { useState } from "react";
import ImgHolder from "../assets/ImgContent/Img-Holder.png";
import arrowDown from "../assets/icons/arrow-down.png";

function ContentMobie({ content }) {
  // const itemRefs = useRef([]);
  const [activeFood, setActiveFood] = useState(0);
  const [open, setopen] = useState(false);

  const handleActiveMenu = () => {
    setopen(true);
  };
  const handleSelectMenu = (index) => {
    setActiveFood(index);
    setopen(false); // chọn xong thì đóng dropdown
  };

  return (
    <div className=" flex flex-col items-start p-0 gap-4 w-[302px] h-[472px] flex-none order-4 self-stretch grow-0 z-[4]">
      <div className="relative">
        <button
          className="flex flex-col  items-start p-0 gap-2 w-[302px] h-[40px] flex-none order-0 self-stretch grow-0 "
          onClick={handleActiveMenu}
        >
          <div className="box-border flex flex-row  items-center px-3 py-4 gap-[10px] w-[302px] h-[40px] bg-white rounded-[60px] flex-none order-1 self-stretch grow-0">
            <span className="w-[252px] h-[20px]  font-manrope font-normal text-[14px] leading-[20px] text-[#2D2F33] flex-none order-0 grow text-left pl-[10px]">
              {content[activeFood].title}
            </span>
            <img
              src={arrowDown}
              alt=""
              className="w-4 h-4 flex-none order-1 grow-0 rotate-180"
            />
          </div>
        </button>
        {open && (
          <div className="absolute top-[40px] left-[15px] flex flex-col gap-[6px] pt-[5px] w-[270px] h-[100px] bg-white z-[5]  border border-[rgba(45,47,51,0.1)] pl-[10px] overflow-y-auto">
            {content.map((item, index) => (
              <div key={index}>
                <button
                  className=" text-left hover:scale-105 "
                  onClick={() => handleSelectMenu(index)}
                >
                  <span className="w-[252px]  font-manrope font-normal text-[14px] leading-[20px] text-[#2D2F33] ">
                    {item.title}
                  </span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col items-start p-0 gap-1 w-[302px] h-[98px] flex-none order-1 self-stretch grow-0">
        <p className="w-[302px] h-[34px] font-manrope font-bold text-[24px] leading-[140%] text-[#2D2F33] flex-none order-0 self-stretch grow-0">
          {content[activeFood].title}
        </p>
        <p className="w-[305px] h-[60px] font-manrope font-normal text-[14px] leading-[20px] text-[#2D2F33] flex-none order-1 self-stretch grow-0">
          {content[activeFood].description}.
        </p>
      </div>
      <img
        src={ImgHolder}
        alt=""
        className="w-[302px] h-[302px] flex-none order-2 self-stretch grow-0"
      />
    </div>
  );
}

export default ContentMobie;
