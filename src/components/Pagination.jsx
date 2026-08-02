import { useState } from "react";

function Pagination() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex justify-center items-center gap-2 h-[44px] order-2">
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          onClick={() => setActive(index)}
          className={`
            cursor-pointer
            transition-all duration-300
            ${
              index === active
                ? "w-[60px] h-[4px] bg-[#2D2F33]"
                : "w-[24px] h-[2px] bg-[#D9D9D9]"
            }
          `}
        />
      ))}
    </div>
  );
}

export default Pagination;
