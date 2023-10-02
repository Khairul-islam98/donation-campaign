import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import '../Header/Header.css'
import { AiOutlineBars } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [btnClicked, setBtnClicked] = useState(false);

  const handleNav = ()=> {
    setBtnClicked(!btnClicked)
  }
  
  return (
    <>
      <nav className="absolute top-0 z-50 w-full h-28">
        <div className="container mx-auto px-5">
          <div className="flex justify-between items-center py-4">
            <div className="flex-1">
              <Link to={"/"}>
                <img className="md:max-w-[180px]" src={logo} alt="" />
              </Link>
            </div>
            <div className="flex-1 relative">
              <div className="md:hidden flex justify-end">
                <p onClick={handleNav} className="text-xl">
                  <AiOutlineBars />
                </p>
              </div>
              <div className={`${btnClicked?'flex':'hidden'} 
              absolute md:static bg-slate-400 md:bg-transparent md:gap-6 w-[80%] right-0 top-8
               px-3 py-2 flex-col md:flex-row md:flex md:justify-end md:w-full`}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/donation'}>Donation</NavLink>
                <NavLink to={'/statistics'}>Statistics</NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
