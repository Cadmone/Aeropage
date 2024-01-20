import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { IoMdCloudDownload } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Naver = () => {
  let [show, setshow] = useState(false)

  let junayed = () =>{
    setshow(!show)
  }
  return (
    <section className=' bg-[#fff]'>
        <div className=' max-w-container mx-auto'>
        <div className=" lg:flex items-center justify-between ">
            <div className=" flex items-center w-[60%] justify-between ">
            <div className=":lg:w-[30%] sm:w-[50%]">
             <img src={logo} alt=" logo" />
            </div>
            <div className=":w-[60%]">
              <ul className={`lg:flex gap-x-11 justify-center absolute left-0 top-0 lg:static ${show ? " top-[50px] bg-[#ff9203] w-full transition duration-300 ease-in-out py-4 text-center": "top-[-200px] transition duration-300 ease-in-out"} `}>
                <li><a className=' text-lg font-normal text-[#090909] font-pops hover:text-[#045e0d] ' href="#">Home</a></li>
                <li><a className=' text-lg font-normal text-[black] font-pops hover:text-[#ff0000]' href="#">About</a></li>
                <li><a className=' text-lg font-normal text-[black] font-pops hover:text-[#ff0000] ' href="#">Service</a></li>
                <li><a className=' text-lg font-normal text-[black] font-pops hover:text-[#ff0000]' href="#">Contact</a></li>
              </ul>
            </div>
            </div>
            <div className=" font-semibold text-[#ff9900] text-[20px] mt-[-40px] pl-[90%] lg:hidden mb-[30px] sm:pl-[95%] sm:mt-[-30px]" onClick={junayed}>
            {show == true ? <ImCross /> : <FaBars />}
            </div>
            <div className="lg:w-[30%] lg:mt-[18px] sm:ml-[150px] sm:mt-[-70px] sm:w-[50%] w-[70%] ml-[13%] ">
              <div className=" sm:ml-[100px] py-[14px] px-[70px] bg-[#ff7700] rounded-[15px] flex items-center hover:bg-[green]">
              <div className=" pr-[10px] text-white text-xl">
              <IoMdCloudDownload />
              </div>
                <a className=' text-[#fff] font-pops text-lg font-medium ' href="#">Download</a>
              </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Naver