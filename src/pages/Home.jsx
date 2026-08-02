import Menu from "../components/Menu";
import Banner from "../components/Banner";
import Pagination from "../components/Pagination";
import Content from "../components/Content";

function Home() {
  return (
    <div className="w-full flex flex-col items-center lg:items-start p-0 relative bg-white ">
      <div className="w-full justify-center items-center flex flex-col p-0 flex-none order-0 self-stretch">
        <Menu />
        <Banner />
        <Pagination />
      </div>
      <Content />
    </div>
  );
}

export default Home;
