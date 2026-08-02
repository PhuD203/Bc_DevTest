import banner from "../assets/Pic/image 776.png";
import logo from "../assets/Logo/logo-v2.png";
import banner2 from "../assets/Pic/Frame 2.png";
import BannerContent from "./BannerContent";

function Banner() {
  const text = ` Quản lý dễ dàng, 
  bán hàng hiệu quả`;
  return (
    <div>
      {/* Destop */}
      <div className="hidden w-full lg:flex flex-col justify-center items-start h-[650px] px-[86px] gap-[10px] bg-white flex-none order-1 self-stretch grow-0 ">
        <div
          className="flex items-center w-full max-w-[1340px] h-[650px] mx-auto py-[80px] px-[86px] gap-[60px]  rounded-[24px] bg-[#F8F8F8] bg-cover bg-center "
          style={{ backgroundImage: `url(${banner})` }}
        >
          <BannerContent logo={logo} text={text} />
        </div>
      </div>
      {/* Mobie */}
      <div className=" block lg:hidden flex flex-col mx-auto items-center  p-0 max-w-[350px] h-[650px] rounded-[12px] flex-none order-1 grow-0">
        <div className=" w-full h-[240px] bg-white flex-none order-0 self-stretch grow-0">
          <img src={banner2} alt="" />
        </div>
        <BannerContent logo={logo} text={text} />
      </div>
    </div>
  );
}

export default Banner;
