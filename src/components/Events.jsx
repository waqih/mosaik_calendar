import { BiMenu } from "react-icons/bi"; 
import { BiCalculator } from "react-icons/bi"; 
import { AiFillPlusCircle } from "react-icons/ai"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import { RiGalleryView2 } from "react-icons/ri";
import React from 'react'

const Events = () => {
  return (
    <div className="w-[85%] m-auto mt-[10px]">

 
    <div className=' flex justify-between'>
<div>
    <p className="text-[#065056] text-[24px] font-bold">Upcoming Events</p>
</div>
<div className=" flex gap-[20px]">
<AiOutlineSearch className="text-[40px] p-2 font-bold bg-[#F5F5F5] rounded-md" />
<AiFillPlusCircle className="text-[40px] p-2 font-bold bg-[#FF6F00] text-white rounded-md"/>
</div>

    </div>
<div className="flex w-full justify-between items-end mt-[10px]">

    <div className="relative mt-2 rounded-md shadow-sm w-[74%] ">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <BiCalculator aria-hidden="true" className="h-5 w-5 text-[#065056] " />
        </div>
        <input
          id="email"
          name="email"
          type="date"
          placeholder="you@example.com"
          className="block w-full rounded-md border-0  pl-[90px] p-[10px] text-[16px] font-bold ring-1 ring-inset ring-gray-400 placeholder:text-[#065056] text-[#065056] focus:ring-2 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="flex gap-[10px]">
      <RiGalleryView2 className="text-[30px]  font-bold  text-[#8DA1A6] rounded-sm" />

        <BiMenu className="text-[35px]  font-bold  text-[#8DA1A6] rounded-sm"/>

      </div>
</div>

    </div>
  )
}

export default Events