import { useState } from "react";

function TabContentDestop({ tab }) {
  const [activeMenu, setActiveMenu] = useState(0);

  const handleActiveMenu = (index) => {
    setActiveMenu(index);
  };
  return (
    <div className="hidden lg:flex flex-row items-start px-3 pb-3 w-[624px] h-[60px] bg-white rounded-b-[32px]">
      {tab.map((tab, index) => (
        <button
          className={`flex h-12 w-[200px] items-center justify-center gap-2 rounded-[24px] ${
            activeMenu === index ? "bg-[#2D2F33]" : ""
          } px-6`}
          key={index}
          onClick={() => handleActiveMenu(index)}
        >
          <img
            src={tab.icons}
            alt=""
            className={`w-6 h-6 ${
              activeMenu === index ? "brightness-0 invert" : "brightness-0"
            }`}
          />
          <span
            className={`w-[63px] h-6 text-center text-base font-semibold leading-6  ${
              activeMenu === index ? "text-white" : "text-black"
            }`}
          >
            {tab.title}
          </span>
          {tab.status === true && (
            <div className="flex h-6 w-12 items-center justify-center gap-2.5 rounded-full bg-[#BFFB4F] px-5">
              <span className="text-center text-xs font-bold uppercase leading-4 text-[#2D2F33]">
                NEW
              </span>
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

export default TabContentDestop;

// <button
//   className={`flex h-12 w-[200px] items-center justify-center gap-2 rounded-[24px] ${
//     activeMenu === index ? "bg-[#2D2F33]" : ""
//   } px-6`}
//   key={index}
//   onClick={() => handleActiveMenu(index)}
// >
//   <img
//     src={tabs.icons}
//     alt=""
//     className={`w-6 h-6 ${
//       activeMenu === index ? "brightness-0 invert" : "brightness-0"
//     }`}
//   />
//   <span
//     className={`w-[63px] h-6 text-center text-base font-semibold leading-6  ${
//       activeMenu === index ? "text-white" : "text-black"
//     }`}
//   >
//     {tabs.title}
//   </span>
//   {tabs.status === true && (
//     <div className="flex h-6 w-12 items-center justify-center gap-2.5 rounded-full bg-[#BFFB4F] px-5">
//       <span className="text-center text-xs font-bold uppercase leading-4 text-[#2D2F33]">
//         NEW
//       </span>
//     </div>
//   )}
// </button>
