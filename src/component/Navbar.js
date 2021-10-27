import {
    Link, NavLink
  } from "react-router-dom";

import dumny from '../assets/img/dumny.jpeg'
  
const Navbar = () => {
    return (
        <nav className="fixed mt-10 bottom-0 w-full flex items-center bg-gray-50">

            <NavLink exact={true} to="/" activeClassName="selected" className="px-4 py-2 text-blue-500 text-center w-1/4 flex flex-col items-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </NavLink>

            <NavLink to="/chat" activeClassName="selected" className="px-4 py-2 text-blue-500 text-center w-1/4 flex flex-col items-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            </NavLink>

            <NavLink to="/notification" activeClassName="selected" className="px-4 py-2 text-blue-500 text-center w-1/4 flex flex-col items-center">
           <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </NavLink>

            <NavLink to="/profile" activeClassName="selected" className="px-4 py-2 text-blue-500 text-center w-1/4 flex flex-col items-center">
            <img src={dumny} alt="" className=" rounded-full w-6 h-6  object-cover"/>
            </NavLink>

        </nav>
    )
}

export default Navbar 
