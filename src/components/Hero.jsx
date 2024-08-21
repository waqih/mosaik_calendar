import { BiArrowBack } from "react-icons/bi"; 
import { BiCalendar } from "react-icons/bi"; 
import React from 'react'
import image from './images/image 1.svg'
import bgImage from './images/Rectangle 212.png'
import { IoCalendarOutline } from "react-icons/io5";
const Hero = () => {
  const styles = {
    paperContainer: {
        height: 'auto',
        backgroundImage: `url(${bgImage})`
    }
};
  return (
    <div className=' w-full'>
      <div className="h-[50px] bg-white p-4"> 
        <BiArrowBack className="text-[30px]" />
      </div>
        <img src={image} alt="bg image " />
        <div
        className="w-[90%] relative m-auto text-center mt-[-50px] border border-red-100 backdrop-blur-md p-4 rounded-lg bg-cover bg-center flex flex-col justify-center items-center"
        style={styles.paperContainer} // Set the background image
      >
  

        <BiCalendar  className=" h-[50px] w-[50px] p-2 top-[-30px] absolute bg-[#065056]  text-white" style={{borderRadius:'50%'}}/>
     

        <h1 className="text-[32px] font-bold mb-4 text-[#065056]">Mosaik Calendar</h1>
        <p className="text-[15px] text-center">
          Welcome to mosaik calendar! A place where you can easily manage and view upcoming events or plan your next conference, meeting, or appointment instantly!
        </p>
      </div>
   

    </div>
  )
}

export default Hero