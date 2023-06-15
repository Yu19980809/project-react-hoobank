import React, { useState } from 'react';
import { logo, menu, close } from '../assets/images';
import { navLinks } from '../constants';

const Navbar = () => {
  const [ toggle, setToggle ] = useState( false );

  return (
    <nav className='flex justify-between items-center w-full py-6 navbar'>

      {/* logo */}
      <img
        src={ logo }
        alt='logo'
        className='w-[124px] h-[32px]'
      />

      {/* links on usual screen */}
      <ul className='sm:flex hidden justify-end items-center flex-1 list-none'>
        { navLinks.map( ( link, index ) => (
          <li
            key={ link.id }
            className={ `font-poppins font-normal cursor-pointer text-[16px] text-white ${ index === navLinks.length - 1 ? 'mr-0' : 'mr-10' }` }
          >
            <a href={ link.id }>
              { link.title }
            </a>
          </li>
        ) ) }
      </ul>

      {/* links on small screen */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={ toggle ? close : menu }
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={ () => setToggle( prev => !prev ) }
          />

          <div className={ `${ toggle ? 'flex' : 'hidden' } absolute top-20 right-0 min-w-[140px] mx-4 my-2 p-6 bg-black-gradient rounded-xl sidebar ` }>
            <ul className='flex flex-col justify-end items-center flex-1 list-none'>
              { navLinks.map( ( link, index ) => (
                <li
                  key={ link.id }
                  className={ `font-poppins font-normal cursor-pointer text-[16px] text-white ${ index === navLinks.length - 1 ? 'mb-0' : 'mb-4' }` }
                >
                  <a href={ link.id }>
                    { link.title }
                  </a>
                </li>
              ) ) }
            </ul>
          </div>
      </div>

    </nav>
  );
}

export default Navbar;