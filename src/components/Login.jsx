import Icons from "../assets/icons/icons.png";

function Login() {
  return (
    <div className="flex flex-row items-center p-0 gap-4 w-[342px] h-[48px] flex-none order-1 grow-0">
      <button className=" box-border flex flex-row justify-center items-center px-5 py-3 gap-[10px] w-[123px] h-[48px] border border-[rgba(45,47,51,0.2)] rounded-[80px] flex-none order-0 grow-0">
        Đăng Nhập
      </button>
      <button className="  flex flex-row justify-center items-center px-5 py-3 gap-[6px] w-[203px] h-[48px] bg-[#BFFB4F] rounded-[80px] flex-none order-1 grow-0">
        <span>Sử dụng miễn phí</span>
        <img src={Icons} alt="" />
      </button>
    </div>
  );
}

export default Login;
