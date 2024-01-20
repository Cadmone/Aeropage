import React from 'react'
import { FaRegBell } from "react-icons/fa";
import img1 from "../assets/img.png"

const Banner = () => {
  return (
    <section>
        <div className=" max-w-container mx-auto">
        <div className=" lg:flex">
          <div className=" w-[65%]">
           <div className=" w-full ml-[50px] mt-[50px] lg:ml-[2px] lg:mt-[180px] lg:w-[25%] py-[12px] px-[40px] sm:w-[55%] sm:ml-[50%] border-solid border-2 border-[#1d1a1a] rounded-[20px]  relative items-center flex hover:bg-[#e06b04] ">
            <a className='py-[10px] px-[10px]  bg-[#8e6161] rounded-full ml-[-30px] ' href="#"><FaRegBell /></a>
            <p className=' '>Startup Business</p>
           </div>
            <h3 className=' text-2xl pt-[35px] lg:leading-[55px] lg:text-4xl font-semibold font-pops w-[320px] lg:w-[456px]'>Empowering startups to fuel
             their business growth</h3>
             <p className=' pt-[10px] lg:pt-[32px] text-base font-normal font-pops text-black w-[320px] lg:w-[500px]'>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,
             velit</p>
             <span className='text-base font-normal font-pops text-black'>nibh arcu eu. Id sem varius malesuada tincidunt sodales.</span>
             <div className="mt-[35px]">
          <a className='  w-[90%]  lg:ml-[1px] py-[12px] px-[40px] bg-[#ff8c00] rounded-[15px] text-[#fff] font-pops text-base font-medium hover:bg-[green] ' href="#">Get started now </a>
          </div>
          </div>
          <div className="sm:ml-[20%] ml-[10px] lg:ml-0 lg:w-[35%] pt-[95px]">
          <img src={img1} alt="" />
          </div>
        </div>
        </div>
    </section>
  )
}

export default Banner