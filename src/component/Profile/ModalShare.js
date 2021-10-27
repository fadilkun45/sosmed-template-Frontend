import React from 'react'

const ModalShare = ({sharePost}) => {
    return (
        <div className="modal fixed flex justify-center items-center bg-transparent top-0 z-10 bottom-0 left-0 right-0 bg-gray-500 bg-opacity-20 ">
        <div className="container bg-white px-3 py-2 flex flex-col justify-around z-20">
        <svg class="w-6 h-6" onClick={sharePost} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        
            <div className="flex flex-col container">
                <p className="font-bold text-center mb-2">share to ?</p>

                <div className="flex justify-center text-center mb-2 items-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> profile
                </div>

                <div className="flex flex-col text-center mb-2 font-bold">
                    or
                </div>
                <div className="flex flex-col text-center ">
                    copy link
                </div>
            </div>
        </div>
       </div>
    )
}

export default ModalShare
