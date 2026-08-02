import Icons from "../assets/icons/icons-white.png";

function BannerContent({ logo, text }) {
  return (
    <div className="flex flex-col items-center lg:items-start py-[20px] lg:py-0 px-0 lg:p-0 gap-2 lg:gap-6 w-[350px] h-[316px] lg:w-[1168px] lg:h-[356px] flex-none order-1 grow lg:relative lg:z-[1]">
      <div className="flex flex-col items-start p-0 gap-3 w-[302px]  lg:w-[824px] lg:h-[192px] flex-none order-0 grow-0">
        <div className="box-border flex flex-col items-start py-[6px] pr-[12px] pl-[6px] w-[76px] h-[32px] border border-[#FAFAF5] lg:pt-2 lg:pb-2 lg:pr-3 lg:pl-2 lg:w-[101px] lg:h-[44px] lg:border-0 lg:bg-white/50 gap-[10px] shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.1),inset_2px_2px_2px_rgba(0,0,0,0.04)] rounded-[80px] flex-none order-0 grow-0">
          <img src={logo} alt="" />
        </div>
        <p className="w-[302px] lg:w-[824px]  gap-2 font-manrope font-extrabold text-[30px] leading-[40px] lg:text-[56px] lg:leading-[68px] text-[#2D2F33] flex-none order-1 grow-0 whitespace-pre-line">
          {text}
        </p>
      </div>

      <span className="w-[302px]  lg:w-[619px] font-manrope font-normal text-[14px] leading-[20px] lg:text-[16px] lg:leading-7 text-[#2D2F33] flex-none order-1 grow-0">
        Chào mừng bạn đến với Xứ sở thần tiên. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </span>

      <button className="flex justify-center items-center py-[10px] px-[20px] gap-[6px] w-[162px] h-[40px]  lg:py-4 lg:px-1 lg:gap-[10px] lg:w-[234px] lg:h-[60px] bg-[#2D2F33] rounded-[80px] flex-none order-2 grow-0">
        <div className="flex items-center px-6 gap-2  w-full h-[40px] lg:w-[226px] justify-center ">
          <span className="font-manrope font-bold text-[12px] lg:text-[18px] leading-[20px] lg:leading-7 text-white whitespace-nowrap">
            Đặt lịch tư vấn
          </span>
          <img
            src={Icons}
            alt=""
            className="w-[20px] h-[20px] lg:w-[32px] lg:h-[32px] flex-none order-1 grow-0"
          />
        </div>
      </button>
    </div>
  );
}

export default BannerContent;
