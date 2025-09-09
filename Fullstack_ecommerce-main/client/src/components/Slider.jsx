import Layout from "./layout/Layout"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Slider = () => {
    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <Layout>
    <div data-aos="zoom-in-up" data-aos-anchor-placement="center-bottom" className='w-full lg:h-[100vh] bg-no-repeat bg-center bg-cover flex flex-col bg-[url("../public/text1.png")] items-center justify-center'>
      <h1 data-aos="fade-up" data-aos-offset="300"
     data-aos-anchor-placement="top-bottom" className='lg:text-8xl md:text-7xl text-5xl pt-24 text-white font-bold text-center'>Most wanted <br /> and most loved</h1>
      <Link to="/allproducts"><button className='bg-white px-4 newarrival py-3 text-black'>Shop New Arrivals</button></Link>
    </div>
    </Layout>
  )
}

export default Slider
