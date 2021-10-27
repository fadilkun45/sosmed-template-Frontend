import React,{useState} from 'react'


const DeleteCommentHandle = ({deleteHandle}) => {


    return (
       <>
           <div className="modal fixed flex justify-center items-center bg-transparent top-0 z-10 bottom-0 left-0 right-0 bg-gray-500 bg-opacity-20 ">

            <div className="container bg-white px-3 py-2 flex flex-col justify-around z-20">
            <svg class="w-6 h-6" onClick={deleteHandle} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                <p className="text-xl text-center mb-4 font-bold">Delete comment ?</p>
               <div className="flex justify-around">
               <button className="text-center w-2/6 px-2 py-2 bg-red-500 text-red-100 " onClick={deleteHandle}>no</button>
                <form action="#" className="flex w-2/6">
                    <button className="text-center w-full px-2 py-2 bg-blue-500 text-white ">yes</button>
                </form>
               </div>
            </div>
            </div>
       </>
    )
}

export default DeleteCommentHandle
