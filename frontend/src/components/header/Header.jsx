import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import Card from "./Card";
import User from "./User";
import { styles } from "../../styles";


export const Header = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-zinc-100"
      }`}
    >
      <header className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <div className='logo'>
          <Link
            to='/'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          > logo
            <div className='w-6 h-6 rounded-full bg-[#7c3aed]' />
          </Link>
        </div>
        <div className='search flex'>
          <AiOutlineSearch className='searchIcon' />
          <input type='text' placeholder='Search...' />
        </div>
        <div className='account flexCenter'>
          <Card />
          <User />
        </div>
      </header>
    </nav>
  )
}



export default Header;