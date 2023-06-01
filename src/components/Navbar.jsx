import React, { useEffect , useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../constants';
import { styles } from '../styles';
import '../index.css'
import menu from '../assets/menu.svg';
import close from '../assets/close.svg'


const Navbar = () => {
     const [active, setActive] = useState("");
     const [toggle,setToggle] = useState(false);
     return ( 
          
          <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 navbar`}>
               <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                    <Link to='/' className='flex items-center gap-2' onClick={() => {setActive("");
               window.scrollTo(0,0);}}>
                     <p className="text-stone-950 font-bold cursor-pointer flex flex-col">
                         Soe Sandar Win&nbsp; 
                         <span className='sm:block hidden'>|Full-stack developer</span>
                     </p>
                    </Link>
                    <ul className="list-none hidden sm:flex flex-row gap-10">
        { navLinks.map((link) => (
          <li key={link.id} className={ `${ active === link.title ? "active" : "text-stone-950"} hover:text-slate-800 text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 navbar absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "active" : "text-stone-950"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
               </div>

          </nav>
      );
}
 
export default Navbar;