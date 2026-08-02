import Icons from "../assets/icons/icons.png";

function DropdownMenu({ items }) {
  return (
    <div className="absolute top-full left-0 mt-3 box-border flex flex-col justify-center items-start p-[24px] w-[280px] h-[192px] gap-[16px] bg-white border border-[rgba(45,47,51,0.1)] rounded-[12px] flex-none order-1 grow-0 z-[10]">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-[232px] h-6 font-manrope text-[16px] font-normal leading-6 text-[#2D2F33] flex-none order-0 self-stretch grow-0 group "
        >
          <button className="flex flex-row items-center p-0 gap-2 w-[232px] h-6 flex-none order-1 self-stretch grow-0 group-hover:font-bold transition-all">
            <span> {item}</span>
            <img
              src={Icons}
              alt=""
              className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default DropdownMenu;
