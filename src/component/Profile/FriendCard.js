import React from 'react'
import { Link } from 'react-router-dom'
import dumny from '../../assets/img/dumny.jpeg'

const FriendCard = ({friendStatus = false}) => {
    return (
        <Link className="flex card border-b border-black pb-2 mb-2 justify-between">
            <div className="flex w-3/6  ">
            <img src={dumny} alt="thumb" className="w-8 h-8 object-cover  border rounded-full"/>
            <h2 className="font-bold ml-4 text-base whitespace-nowrap">Faldi Ramadhan</h2>
            </div>
            <div className="flex">
             {
                 friendStatus ?   <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"></path></svg> : <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg> 
             }
            </div>
        </Link>
    )
}

export default FriendCard
