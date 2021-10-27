import dumny from '../../assets/img/dumny.jpeg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import DeleteCommentHandle from './DeleteCommentHandle'

const CommentCard = () => {
    const [clickStat, setClickStat] = useState(true)


    let clickHandle = () => {
        clickStat ? setClickStat(false) : setClickStat(true)
    } 

    const [commentall, setcommentAll] = useState(true)
    const [Deletemodal, setDeleteHandle] = useState()


    let commentAllHandle = () => {
        commentall ? setcommentAll(false) : setcommentAll(true)
    } 

    let deleteHandle = () => {
        Deletemodal ? setDeleteHandle(false) : setDeleteHandle(true)

    }

    return (
      <>
        <div className="comment-card bg-gray-100 px-3 py-1 rounded-md mb-5">

            <div className="flex my-2">
            <Link to="/profile" className="flex w-2/12">
                <img src={dumny} alt="profile" className="w-full h-12 object-cover rounded-full"/>
            </Link>
                <div className="flex flex-col w-10/12">
                <Link to="/profile" className="ml-2 text-base font-bold">Elaina Ramadhan</Link>
                <p className=" ml-2 break-words mb-1 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, error.</p>
                <div className="flex items-center justify-between w-5/6">
                <p className="text-sm ml-2 font-bold" onClick={clickHandle}>reply</p>
                <p className="text-sm ml-2 font-bold" onClick={deleteHandle}>delete</p>
                <p className=" text-sm ">19 mei 2077</p>
                </div>
                
                </div>
            </div>

            <div className="text-sm font-bold mb-2" onClick={commentAllHandle}>{
                commentall ? "see all reply" : "close all reply"
            }</div>

            {/* delete comment modal */}
            {
                Deletemodal ? <DeleteCommentHandle deleteHandle={deleteHandle} /> : ""
            }

            {/* comment */}
            
            {
                commentall ? "" : 
               <>
                <div className="reply-card bg-gray-200 px-3 py-1 rounded-md mb-3">
                      <div className="flex my-2">
                      <Link to="/profile" className="flex w-2/12">
                            <img src={dumny} alt="profile" className="w-full h-12 object-cover rounded-full"/>
                        </Link>
                            <div className="flex flex-col w-10/12">
                            <Link to="/profile" className="ml-2 text-base font-bold">Elaina Ramadhan</Link>
                            <p className=" ml-2 break-words mb-1 text-sm">bajingan lu mark</p>
                            <div className="flex items-center justify-between w-4/6">
                            <p className="text-sm ml-2 font-bold" onClick={deleteHandle}>delete</p>
                            <p className=" text-sm ml-2">19 mei 2077</p>
                            </div>
                            </div>
                      </div>
                </div>
                  <div className="reply-card bg-gray-200 px-3 py-1 rounded-md mb-3">
                  <div className="flex my-2">
                  <Link to="/profile" className="flex w-2/12">
                        <img src={dumny} alt="profile" className="w-full h-12 object-cover rounded-full"/>
                    </Link>
                        <div className="flex flex-col w-10/12">
                        <Link to="/profile" className="ml-2 text-base font-bold">Elaina Ramadhan</Link>
                        <p className=" ml-2 break-words mb-1 text-sm">asu emang</p>
                        <div className="flex items-center justify-between w-4/6">
                        <p className="text-sm ml-2 font-bold" onClick={deleteHandle}>delete</p>
                        <p className=" text-sm ml-2">19 mei 2077</p>
                        </div>
                        </div>
                  </div>
                </div>
               </>
            }

        
        {/* reply */}
        
        {
            clickStat ? "" :   <div className=" mt-2 mb-3 mx-auto ">
            <form action="" className="flex">
            <input type="text" className="outline-none w-5/6 rounded-none p-1"/>
            <button className="bg-blue-500 text-white w-1/6 flex justify-around items-center p-1">
            <svg class="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </button>
            </form>
            </div>
        }

        </div>

      
      </>
    )
}

export default CommentCard
