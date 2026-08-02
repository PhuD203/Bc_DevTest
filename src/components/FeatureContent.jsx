import food from "../assets/icons/food.png";
import shopping from "../assets/icons/shopping.png";
import Chair from "../assets/icons/Chair.png";
import Rectangle_r from "../assets/icons/Rectangle 18268.png";
import Rectangle_l from "../assets/icons/Rectangle 18269.png";
import FrameBack from "../assets/Pic/Frame 1.png";
import TabContentDestop from "./TabContentDestop";
import TabContentMobie from "./TabContentMobie";
import ContentDestop from "./ContentDestop";
import ContentMobie from "./ContentMobie";

function FeatureContent() {
  const tabs = [
    {
      title: "Ăn uống",
      icons: food,
      status: false,
    },
    {
      title: "Bán lẻ",
      icons: shopping,
      status: true,
    },
    {
      title: "Dịch vụ",
      icons: Chair,
      status: true,
    },
  ];
  const foodContent = [
    {
      title: "Quán cà phê",
      description:
        "Qtable POS giúp order nhanh, chọn size/topping, in phiếu bar và quản lý mang đi/ngồi lại hiệu quả.",
    },
    {
      title: "Quán ăn / nhà hàng",
      description:
        "Qtable POS hỗ trợ quản lý món ăn, gọi món nhanh, chia bàn, in phiếu bếp và kiểm soát doanh thu hiệu quả.",
    },
    {
      title: "Quán bar / lounge / pub",
      description:
        "Qtable POS giúp quản lý đồ uống, combo, order tại bàn, theo dõi tồn kho và tối ưu quy trình phục vụ.",
    },
    {
      title: "Quán ăn di động",
      description:
        "Qtable POS hỗ trợ bán hàng linh hoạt, quản lý đơn mang đi, thanh toán nhanh và theo dõi doanh thu mọi lúc.",
    },
    {
      title: "Tiệm trà sữa",
      description:
        "Qtable POS giúp xử lý order nhanh, tùy chọn size, topping, in tem ly và quản lý đơn hàng chính xác.",
    },
    {
      title: "Tiệm bánh",
      description:
        "Qtable POS hỗ trợ quản lý sản phẩm, đơn đặt trước, tồn kho nguyên liệu và nâng cao hiệu quả bán hàng.",
    },
  ];

  return (
    <div
      className="relative  flex flex-col items-center pt-0 px-6 lg:px-[60px] pb-6 lg:pb-[60px] gap-6 lg:gap-[40px] w-[350px] min-h-[566px] bg-[#F5F5EB] rounded-[24px] lg:w-[1340px] lg:h-[760px] lg:rounded-[40px] flex-none order-1 "
      style={{ backgroundImage: `url(${FrameBack})` }}
    >
      {/* Tab */}
      <div className="flex flex-row justify-center items-start w-[268px] h-[46px] lg:w-[672px] lg:h-[60px] p-0 order-0 z-[10]">
        <img src={Rectangle_l} alt="" />
        <div className="">
          <div className="hidden lg:block">
            <TabContentDestop tab={tabs} />
          </div>
          <div className="block lg:hidden">
            <TabContentMobie tab={tabs} />
          </div>
        </div>
        <img src={Rectangle_r} alt="" />
      </div>

      {/* Content */}
      <div className="hidden lg:block ">
        <ContentDestop content={foodContent} />
      </div>
      <div className="block lg:hidden">
        <ContentMobie content={foodContent} />
      </div>
    </div>
  );
}

export default FeatureContent;
