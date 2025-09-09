import ScrollImages from "../components/ScrollImages";
import Slider from "../components/Slider";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Layout>
      <div className=" pt-24 flex flex-col justify-center items-center">
        <h1 className="text-center bg-white rounded-lg p-3 mt-4 font-semibold">
          Experience fashion like never before
        </h1>
        <h1 className="lg:text-6xl text-3xl lg:px-24 px-2 font-bold text-center font-serif">
          Elevate Your Style with StyleHub: Where Fashion Meets Passion
        </h1>
        <p className="lg:px-80 text-center px-3">
          Lorem ipsum dolor sit optio voluptas nesciunt at officiis autem
          distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis suscipit iusto rem? Totam, omnis, nobis qui natus, sequi
          maxime pariatur iusto deleniti aliquam optio voluptas nesciunt at
          officiis autem distinctio!
        </p>
        <Link to="/allproducts">
          <button className="animated-button">
            <svg
              viewBox="0 0 24 24"
              className="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>
            <span className="text">Start Shopping</span>
            <span className="circle" />
            <svg
              viewBox="0 0 24 24"
              className="arr-1 arrowss"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>
          </button>
        </Link>

        <div className="w-screen lg:flex hidden z-40 bg-[#e8e8e8] h-24 roundiv"></div>
        <ScrollImages />
        <div className="w-screen lg:flex hidden  bg-[#e8e8e8] h-24 roundiv2"></div>
      </div>

      <div>
        <h1 className="lg:text-5xl text-3xl font-semibold text-center font-serif">
          Explore Our Latest Collection For You
        </h1>
        <p className="text-center lg:px-80">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
          voluptatem quibusdam praesentium, provident, quam nulla animi iste
          quae adipisci delectus nostrum vero culpa consequatur impedit dolores
          architecto!
        </p>
      </div>

      <div className="flex gap-4  my-12 md:px-20 lg:flex-row flex-col md:flex-row px-4 lg:px-44">
        <div className="h-[600px] flex gap-4 flex-col w-[60%]">
          <div
            data-aos="zoom-in-down"
            className="h-1/2 text-white rounded-xl couples bg-green-500 flex justify-end flex-col items-baseline"
          >
            <h1 className="px-2 mb-0 text-2xl font-bold font-serif">
              Collection For Couples
            </h1>
            <p className="pl-2 pr-24">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              voluptatibus maxime eum, distinctio cumque illum ea alias
              doloribus modi ex commodi illo at suscipits blanditiis dolor
              tenetur non.
            </p>
          </div>
          <div className="h-1/2 w-full  flex flex-row gap-4">
            <div
              data-aos="zoom-in-down"
              className="w-[70%] text-white mens flex flex-col justify-end rounded-xl bg-blue-400 h-full"
            >
              <h1 className="px-4 p-8 mb-0 text-2xl font-bold font-serif">
                {`Latest Mens's`} <br /> Collection
              </h1>
            </div>
            <div
              data-aos="zoom-in-down"
              className="w-[50%] text-white womens flex flex-col justify-end rounded-xl bg-blue-400 h-full"
            >
              <h1 className="px-4  p-8 mb-0 text-2xl font-bold font-serif">
                {`Latest Women's`} <br /> Collection
              </h1>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-down"
          className="md:h-[600px] lg:h-[600px] h-[300px] w-[100%] kids text-white items-end flex rounded-xl bg-red-400 md:w-[40%] lg:w-[40%]"
        >
          <h1 className="px-4  p-8 mb-0 text-2xl font-bold font-serif">
            {`Latest Kids's`} <br /> Collection
          </h1>
        </div>
      </div>

    <h1 className="lg:mt-32 hidden lg:flex md:flex mt-12 mb-12 text-3xl text-center justify-center font-bold">From Runway to Your Way: <br /> Unwrap Fashion Perfection Today</h1>
      
      <div className="w-screen hidden lg:flex md:flex justify-center flex-wrap items-center mb-32">
        <Link to="/allproducts"><div className="h-72 w-64 card1 bg-green-300 translate-y-12 mx-2  rounded-xl p-4 "></div></Link>
        <Link to="/allproducts"><div className="h-72 w-64 card2 bg-green-300 rounded-xl mx-2 pt-44"></div></Link>
        <Link to="/allproducts"><div className="h-72 w-64 card3 bg-green-300 translate-y-12 mx-2 rounded-xl"></div></Link>
        <Link to="/allproducts"><div className="h-72 w-64 card4 bg-green-300 rounded-xl mx-2 pt-44"></div></Link>
        <Link to="/allproducts"><div className="h-72 w-64 card5 bg-green-300 translate-y-12 mx-2 rounded-xl"></div></Link>
      </div>

      <Slider />
    </Layout>
  );
};

export default Homepage;
