import React,{useState} from 'react'
import FriendCard from './FriendCard'


const Friends = ({handle}) => {

    

    return (
       <>
           <div className="modal fixed flex justify-center items-center bg-transparent top-0 z-10 bottom-0 left-0 right-0 bg-gray-500 bg-opacity-20 ">

            <div className="container bg-white px-3 py-2 flex flex-col justify-around z-20">
            <svg class="w-6 h-6" onClick={handle} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                <div className="container">
                <h2 className="text-base font-bold mt-1 mb-2">Friend list</h2>
                <div className="flex flex-col">
                <FriendCard />
                <FriendCard friendStatus={true}/>
                <FriendCard friendStatus={true} />
                </div>
                </div>
            </div>
            </div>
       </>
    )
}

export default Friends
