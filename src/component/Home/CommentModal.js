import React from 'react'
import CommentCard from './CommentCard'


const CommentModal = ({commentHandle}) => {
    return (
        <div className="modal fixed flex bg-transparent top-0 z-20 bottom-0 left-0 right-0 bg-gray-500 bg-opacity-20 ">
        <div className="container bg-white px-3 py-2 flex flex-col  overflow-y-auto">         
            <div className="flex flex-col container">
            <svg class="w-6 h-6" onClick={commentHandle} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>      
            <p className="text-center text-base mb-4 font-bold">All comment</p>
            <div className="flex flex-col">
                
                <CommentCard />
                <CommentCard />
                <CommentCard />

                {/* reply */}

                <div className=" mt-2 ">
                    <form action="" className="flex">
                    <input type="text" className="outline-none w-5/6 rounded-none p-1 border"/>
                    <button className="bg-blue-500 text-white w-1/6 flex justify-around items-center p-1">
                    <svg class="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    </button>
                    </form>
                </div>

            </div>
            </div>
        </div>
        </div>
    )
}

export default CommentModal
