import React,{useState} from 'react'
import {FiMenu,FiX} from "react-icons/fi";
import {FaGithub,FaLinkedin} from "react-icons/fa";
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false);
  const [activeSection,setActiveSection]=useState("");


  const menuItems=[
    {id:"about",label:"About"},
    {id:"skills",label:"Skills"},
    {id:"experience", label:"Experience"},
    {id:"work",label:"Work"},
    {id:"education",label:"Education"}
  ]
  //Smooth Scroll function 
  function handleMenuItemClick(id){
    setActiveSection(id);
    setIsOpen(false);

  }
  return (
    <nav className='bg-transparent'>
      <div className='text-white py-5 flex justify-between items-center'>
        {/* logo */}
        <div className='text-lg font-semibold cursor-pointer'>
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Manisha </span>
          <span className='text-[#8245ec]'>/</span>
          <span className='text-white'>Saini</span>
          <span className='text-[#8245ec]'>&gt;</span>


        </div>

        {/* Desktop Menu */}
        <div className='md:flex space-x-8 text-gray-300'>
          {menuItems.map((item)=>(
            <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] 
              ${activeSection===item.id?"text-[#8245ec]":""}`}><button onClick={()=>handleMenuItemClick(item.id)}>{item.label}</button></li>
          ))}

        </div>
      </div>

    </nav>
  )
}

export default Navbar