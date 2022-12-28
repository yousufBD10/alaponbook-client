import React, { useContext } from 'react';
import { FaHome, FaSearch } from "react-icons/fa";
import home from '../../assets/image/home.png';
import gaming from '../../assets/image/gaming.png';
import market from '../../assets/image/marketplace.jfif';
import watch from '../../assets/image/watch.png';
import group from '../../assets/image/group.png';
import messenger from '../../assets/image/messenger.png';
import noti from '../../assets/image/noti.png';
import { AuthContext } from '../../Context/AuthProvider';
import users from '../../assets/image/user.png.crdownload'
import log from '../../assets/image/logout.png'
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{

    })
    .catch(error=>console.error(error))
}
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><img className='w-14 mt-8' src={home} alt="" /> </li>
              <li><img className='w-14 mt-8' src={watch} alt="" /> </li>
              <li><img className='w-14 mt-8' src={market} alt="" /> </li>
              <li><img className='w-14 mt-8' src={group} alt="" /> </li>
              <li><img className='w-14 mt-8' src={gaming} alt="" /> </li>
              
            
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-full input-sm border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
       
    </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              <Link to="/home"><li className='  '><img className='w-14 mr-8 mb-0' src={home} alt="" /></li></Link>
             <Link to='/media'> <li><img className='w-14 mr-8' src={watch} alt="" /> </li></Link>
              <li><img className='w-14 mr-8' src={market} alt="" /> </li>
              <li><img className='w-14 mr-8' src={group} alt="" /> </li>
              <li><img className='w-14 mr-8' src={gaming} alt="" /> </li>
          </ul>
        </div>
        <div className="navbar-end">
        <button><img className='w-6 mr-6' src={messenger} alt="" /> </button>
        <button><img className='w-6 mr-6' src={noti} alt="" /> </button>
        <div className="avatar">
  <div className="w-7 rounded-full ring ring-gray-200 ring-offset-base-100 ring-offset-2">
    {
        user?.photoURL ?  <img src={user?.photoURL} alt='f'/>: <img src={users} alt='f'/>
    }
  
   
  </div>
</div>
{
           user?.uid ? <button onClick={handleLogOut} type="button" className="flex ml-6 items-center font-bold "><img className='w-5' src={log} alt="" />LogOut</button> :
           <>
           <Link to='/login'><button type="button" class= "ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button></Link>
          <Link to='/register'><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">SignUp</button></Link>
           
           </>
        }

        </div>
      </div>
    );
};

export default NavigationBar;