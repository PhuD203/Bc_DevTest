import FeatureContent from "./FeatureContent";

function Content() {
  return (
    <div className="w-full flex flex-col items-center py-[60px] px-[20px] gap-8 w-[390px] h-[906px] lg:py-[120px] lg:px-[86px] lg:gap-[60px] w-[350px] lg:w-full lg:h-[1268px] bg-white flex-none  ">
      <div className="mx-auto flex flex-col items-center p-0  gap-4 w-[350px] h-[188px] lg:gap-[24px] lg:w-full lg:max-w-[1176px] lg:h-[192px] order-0">
        <div className="flex flex-col items-center p-0 gap-2 w-full max-w-[390px] h-[72px] lg:gap-[16px] lg:w-[1176px] lg:h-[112px] flex-none order-0 grow-0">
          <div className="flex flex-row justify-center items-center py-1 px-2 lg:px-[12px] gap-[10px] w-[93px] h-[24px lg:w-[116px] lg:h-[28px] bg-[#BFFB4F] rounded-[24px] flex-none order-0 grow-0">
            <span className="h-[16px] lg:h-[24px] font-manrope font-extrabold text-[10px] leading-[16px] lg:text-[12px] lg:leading-[24px] text-center uppercase text-[#2D2F33] flex-none order-0 grow-0">
              long subtitle
            </span>
          </div>
          <h1 className=" w-[350px] lg:w-[1176px] lg:h-[68px] font-manrope font-extrabold text-[32px] leading-[40px] lg:text-[56px] lg:leading-[68px] text-center text-[#2D2F33] flex-none order-1 grow-0">
            Everything You Need
          </h1>
        </div>
        <p className="w-[350px] h-[100px] lg:w-[860px] lg:h-[56px] font-manrope font-normal  text-[14px] leading-[20px] lg:text-[16px] lg:leading-[28px] text-center text-[#2D2F33] flex-none order-1 grow-0">
          Improve speed of service, boost kitchen efficiency, and drive repeat
          business with a restaurant management solution that offers everything
          you need to maximize profits and offer an unparalleled guest
          experience – all in one place.
        </p>
      </div>
      <FeatureContent />
    </div>
  );
}

export default Content;
