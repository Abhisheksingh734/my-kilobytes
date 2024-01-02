// import React from 'react'
import Logo1 from "../assets/logo1.png"
import Logo2 from "../assets/logonew.png"
import { TbLayoutDashboard } from "react-icons/tb";
import { RiFolderReceivedFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { NavLink } from 'react-router-dom';



const SideBar = () => {
  return (
    <div className="h-screen pt-8 bg-[#051e47] min-w-[125px] w-[125px] p-4 flex flex-col text-md items-center   text-center ">
        <img className="mb-6" src={Logo1} height={50} width={50}/>
        <img className="mb-4" src={Logo2} height={50} width={50}/>
        <div className="m-6 flex flex-col items-center">
          <div className="text-2xl text-white "><TbLayoutDashboard/></div>
          <NavLink to={"/"} className={({isActive})=>`text-white ${isActive? 'text-blue-gray-300 border-b-2 rounded-md px-2' : '' } font-normal`}>Dashboard
            </NavLink> 
        </div>
        <div className="mb-5 flex flex-col items-center">
          <div className="text-2xl text-white "><RiFolderReceivedFill/></div>
          <NavLink to={"/responses"} className={({isActive})=>`text-white ${isActive? 'text-blue-gray-300 border-b-2 rounded-md px-2' : '' } font-normal`}>Responses</NavLink>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl text-white"><FaUsers/></div>
          <NavLink to={"/agents"} className={({isActive})=>`text-white ${isActive? 'text-blue-gray-300 border-b-2 rounded-md px-6' : '' } font-normal`}>Agents</NavLink>
        </div>
        <NavLink to={"/login"} className="mt-auto" >
        <div className="text-white text-xl p-4 flex flex-col justify-center items-center">
          < RxExit/>
           <p className="text-white text-lg  font-sans">Logout</p>
        </div>
           </NavLink>
      </div>
  )
}

export default SideBar