import { useState, useRef, useEffect } from "react";
import ImgHolder from "../assets/ImgContent/Img-Holder.png";

function ContentDestop({ content }) {
  const itemRefs = useRef([]);
  const [activeFood, setActiveFood] = useState(0);

  return (
    <div className=" flex h-[600px] w-[1220px] items-center justify-between gap-20">
      <div className="flex h-[600px] w-[610px] flex-col items-start gap-10 self-stretch border-l border-l-[rgba(45,47,51,0.1)]">
        <div className="relative isolate flex h-[260px] w-[540px] flex-1 flex-col items-start justify-center gap-6 self-stretch py-5 pl-10">
          <div
            className="absolute left-0 h-[50px] w-[3px] rounded-full bg-[#6E6F72] transition-all duration-300"
            style={{
              top:
                (itemRefs.current[activeFood]?.offsetTop ?? 0) +
                (activeFood === 0 ? 20 : -40),
            }}
          />

          {content.map((item, index) => (
            <div
              className="flex h-[154px] w-[500px] flex-col items-start gap-2 self-stretch py-5"
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <button
                className={`w-[500px] self-stretch text-left font-bold text-[#2D2F33] ${
                  activeFood === index
                    ? "text-[36px] leading-[140%]"
                    : "text-[20px] leading-7"
                }`}
                onClick={() => setActiveFood(index)}
              >
                {item.title}
              </button>
              {activeFood === index && (
                <span className="h-[56px] w-[500px] self-stretch text-base font-normal leading-7 text-[#2D2F33]">
                  {item.description}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="h-[600px] w-[610px] flex-none">
        <img
          src={ImgHolder}
          alt=""
          className="p- h-[600px] w-[600px] rounded-[24px] object-cover"
        />
      </div>
    </div>
  );
}

export default ContentDestop;
