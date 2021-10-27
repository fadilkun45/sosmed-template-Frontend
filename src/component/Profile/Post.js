import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import dumny from '../../assets/img/dumny.jpeg'
import ScrollHidden from '../../utility/ScrollHidden'
import CommentModal from './CommentModal'
import DeleteHandle from './DeleteHandle'
import EditPost from './EditPost'
import ImageModal from './ImageModal'
import ModalShare from './ModalShare'
import ReportHandle from './ReportHandle'

const Post = ({image,textpost}) => {


    let [like, setLike] = useState(false)

    const likehandle = () => {
        like ? setLike(false) : setLike(true)    
    }

    let [sharemodal, setshareModal] = useState(false)
    let [optionmodal, setoptionModal] = useState(false)
    let [editmodal, seteditModal] = useState(false)
    let [commentmodal, setcommentModal] = useState(false)
    let [deletemodal, setdeleteModal] = useState(false)
    let [reportmodal, setreportModal] = useState(false)
    let [imagemodal, setimageModal] = useState(false)



    const commentHandle = () => {
        commentmodal ? setcommentModal(false) : setcommentModal(true)
        commentmodal ?  ScrollHidden("auto") : ScrollHidden("hidden")  
    }

    
    const sharePost = () => {
        sharemodal ? setshareModal(false) : setshareModal(true)
        sharemodal ? ScrollHidden("auto") :  ScrollHidden("hidden") 
    }
    
    const optionhandle = () => {
        optionmodal ? setoptionModal(false) : setoptionModal(true)
        optionmodal ? ScrollHidden("auto") :  ScrollHidden("hidden") 
    }
    
    
    const edithandle = () => {
        editmodal ? seteditModal(false) : seteditModal(true)
        optionmodal ? setoptionModal(false) : setoptionModal(true)
        editmodal ? ScrollHidden("auto") :  ScrollHidden("hidden") 
    }
    
    const deleteHandle = () => {
       deletemodal ? setdeleteModal(false) : setdeleteModal(true)
       optionmodal ? setoptionModal(false) : setoptionModal(true)
       deletemodal ?  ScrollHidden("auto") : ScrollHidden("hidden")  
    }

    const reportHandle = () => {
        reportmodal ? setreportModal(false) : setreportModal(true)
        optionmodal ? setoptionModal(false) : setoptionModal(true)
        reportmodal ?  ScrollHidden("auto") : ScrollHidden("hidden")  
     }

     const imageHandle = () => {
        imagemodal ? setimageModal(false) : setimageModal(true)
        imagemodal ?  ScrollHidden("auto") : ScrollHidden("hidden")  
     }

    return (
        <div className="px-3 py-2 bg-custom-100 rounded-md mb-3">
              <div className="flex my-2 justify-between">
              <Link to="/profile" className="flex">
                    <img src={dumny} alt="profile" className="w-8 h-8 object-cover rounded-full"/>
                    <div className="flex flex-col">
                    <p className="ml-2 text-base font-bold">Elaina Ramadhan</p>
                    <p className="ml-2 text-xs">19 mei 2077</p>
                    </div>
                </Link>
                 {/* modal option */}

                 {
                           optionmodal ? <div className="modal fixed flex justify-center items-center bg-transparent top-0 z-10 bottom-0 left-0 right-0 bg-gray-500 bg-opacity-20 ">
                            <div className="container bg-white px-3 py-2 flex flex-col justify-around z-20">
                            <svg class="w-6 h-6" onClick={optionhandle} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            
                                <div className="flex flex-col container">
                                    <p className="font-bold text-center mb-2" onClick={deleteHandle}>delete</p>
                                    <p className="font-bold text-center mb-2" onClick={edithandle}>edit</p>
                                    <p className="font-bold text-center mb-2" onClick={reportHandle}>report</p>
                                </div>
                            </div>
                           </div> : ""
                }
                {
                    editmodal ? <EditPost  edithandle={edithandle}/> : "" 
                }
                {
                    deletemodal ? <DeleteHandle deleteHandle={deleteHandle}/> : ""
                }
                {
                    reportmodal ? <ReportHandle reportHandle={reportHandle} username={"elaina ramadhan"}/> : ""
                }
                {
                    imagemodal ? <ImageModal  imageHandle={imageHandle} image={image}/> : ""
                }

                <div className="option" onClick={optionhandle}>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                </div>
              </div>

                <p className="text-base text-left">{textpost}</p>
                {
                    image == undefined  ? "" : <img src={image} alt="image" className="mt-4" onClick={imageHandle}/>
                }

                <p className="text-xs mt-2">10 like 6 comment</p>
            <div className="flex mt-1">

                <div className="like w-2/6 " onClick={likehandle} >
                {
                    like ? <div className="flex items-center text-blue-500">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
                <p className="text-sm ml-2" >like</p>
                </div> : <div className="flex items-center ">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
                <p className="text-sm ml-2 " >like</p>
                </div>    
                }

                </div>

                 {/* modal comment */}

                 {
                commentmodal ? <CommentModal commentHandle={commentHandle} /> : ""
                }

                <div className="comment w-2/6 flex justify-around" onClick={commentHandle}>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                </div>

                {/* modal share */}

                {
                 sharemodal ? <ModalShare sharePost={sharePost} /> : ""
                }
                <div className="share w-2/6 flex justify-around" onClick={sharePost}>
                   
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default Post
