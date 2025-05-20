import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);


  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" }
  ]

  //Check scroll and change navbar background

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  //Smooth Scroll function 
  function handleMenuItemClick(id) {
    setActiveSection(id);
    setIsOpen(false);

  }
  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] 
    ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md " : "bg-transparent"}`}>
      <div className='text-white py-5 flex justify-between items-center'>
        {/* logo */}
        <div className='text-lg font-semibold cursor-pointer'>
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Manisha</span>
          <span className='text-[#8245ec]'>/</span>
          <span className='text-white'>Saini</span>
          <span className='text-[#8245ec]'>&gt;</span>


        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8 text-gray-300'>
          {menuItems.map((item) => (
            <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] 
              ${activeSection === item.id ? "text-[#8245ec]" : ""}`}><button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button></li>
          ))}

        </ul>

        {/* Social media icons */}

        <div className='hidden md:flex space-x-4 '>

          <a
            href="https://github.com/saini-manisha?"
            target='_blank'
            rel="noopener norefferee"
            className='text-gray-300 hover:text-[#8245ec]'
          ><FaGithub size={24}></FaGithub></a>

          <a
            href="https://www.linkedin.com/in/manisha-saini-a222aa182/"
            target='_blank'
            rel="noopener norefferee"
            className='text-gray-300 hover:text-[#8245ec]'
          ><FaLinkedin size={24}></FaLinkedin></a>

        </div>

        {/* Mobile menu icons */}

        <div className='md:hidden'>
          {
            isOpen ? (
              <FiX className='text-3xl text-[#8245ec] cursor-pointer '
                onClick={() => setIsOpen(false)}
              ></FiX>
            ) : (
              <FiMenu className='text-3xl text-[#8245ec] cursor-pointer'
                onClick={() => setIsOpen(true)}
              ></FiMenu>
            )
          }
        </div>
      </div>

      {/* Mobile menu items */}

      {isOpen && (
        <div className='md:hidden absolute top-16 left-1/2 p-2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg '>
          <ul className='flex flex-col items-center space-y-4 text-gray-300'>
            {
              menuItems.map((item) => (
                <li key={item.id} className={`cursor-pointer hover:text-white
                  ${activeSection === item.id ? "text-[#8245ec]" : ""} `}>
                  <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
                </li>
              ))
            }

            <div className='flex space-x-4'>
              <a
                href="https://github.com/saini-manisha?"
                target='_blank'
                rel="noopener norefferee"
                className='text-gray-300 hover:text-white'
              ><FaGithub size={24}></FaGithub></a>

              <a
                href="https://www.linkedin.com/in/manisha-saini-a222aa182/"
                target='_blank'
                rel="noopener norefferee"
                className='text-gray-300 hover:text-white'
              ><FaLinkedin size={24}></FaLinkedin></a>
            </div>

          </ul>

        </div>
      )}



    </nav>
  )
}

export default Navbar