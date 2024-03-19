import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
const Header =()=>{
    const[toggle,setToggleMenu] = useState(false);
  return (
    <div>
      <header className="flex justify-between bg-primary py-4">
        <h1 className="px-2 font-bold text-xl">Ajithkumar R</h1>
        <ul className="flex text-white hidden md:flex block">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
          
          
        </ul>
        {toggle && <ul onClick={()=>{setToggleMenu(!toggle)}}className="block md:hidden fixed bg-gray-800 w-full top-16 text-center text-white text-xl mobile-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
          
        </ul>}
        
        <button onClick={()=>setToggleMenu(!toggle)}className="block md:hidden mr-2">
        <Bars3Icon className="w-8 h-8"/>
        </button>
      </header>
    </div>
  );
}

export default Header;