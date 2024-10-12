import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Courses", link: "/courses" },
  { id: 3, title: "Student", link: "/student" },
  { id: 4, title: "Contact", link: "/contact" },
  { id: 5, title: "Login", link: "/login" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav>
      <div className='container flex justify-between items-center py-4 md:pt-4'>
        {/* Logo section */}
        <div className='text-2xl flex items-center gap-2 font-bold'>
          <p className='text-primary'>AS</p>
          <p className='text-secondary'>Academy</p>
        </div>
        
        {/* Menu section for desktop */}
        <div className='hidden md:flex items-center gap-8 text-gray-600'>
          <ul className='flex items-center gap-8'>
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a href={menu.link} className='inline-block py-1 px-3 hover:text-secondary hover:shadow-[0_3px_0_1px_#ef4444] font-semibold'>
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
          <button className='text-2xl hover:bg-secondary hover:text-white rounded-full p-2 duration-200'>
            <FaUser />
          </button>
        </div>

        {/* Menu button for mobile */}
        <button
          className='md:hidden text-3xl'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <TiThMenu />
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden'>
          <ul className='flex flex-col items-center gap-4 mt-4'>
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a href={menu.link} className='block py-2 px-4 text-gray-600 hover:text-primary hover:shadow-[0_3px_0_1px_#ef4444] font-semibold'>
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
