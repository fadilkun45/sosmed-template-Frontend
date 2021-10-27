import React,{useState} from 'react'


const EditPost = ({edithandle}) => {

    let [imageup, setimageupload] = useState("")

    let [inputimg, setinputimg] = useState(false)


    let imageUpload = (event) => {
        setimageupload(URL.createObjectURL(event.target.files[0]))
    }

    let deleteImage = () => {
        setimageupload("")
        setinputimg(true)
        
    }

    return (
       <>
     {
           <div className="modal fixed flex justify-center items-center bg-transparent top-0 z-10 bottom-0 left-0 right-0 bg-gray-500 bg-opacity-20 ">

            <div className="container bg-white px-3 py-2 flex flex-col justify-around z-20">
            <svg class="w-6 h-6" onClick={edithandle} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                <p className="text-xl text-center mb-4 font-bold">Edit Post</p>
                <form action="#" className="flex flex-col ">
                    <textarea name="" id="" className=" w-full  px-3 py-2 resize-none outline-none" placeholder="tulis sesuatu">
                    </textarea>
            
                    {
                     imageup == "" ?  "" :  <div className="w-full flex flex-col">
                     <svg class="w-6 h-6 absolute text-white hover:bg-black" onClick={deleteImage}  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                 <img src={imageup} className=" w-full h-52 object-cover"/>
                    </div> 
                    }
                 
                    <div className="file-upload relative mt-5 items-center  flex">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    {
                        imageup == "" ?   "tambah gambar" : "ganti gambar"
                    }
                    {
                        inputimg ?  <input type="file"  onChange={imageUpload} className="absolute top-0 opacity-0 "/>
                        :  <input type="file"  onChange={imageUpload} className="absolute top-0 opacity-0 "/>
                       
                    }
                    </div>
                    <button className="text-center px-2 py-2 bg-blue-500 text-white mt-5">Post</button>
                </form>
            </div>
            </div>
     }
       </>
    )
}

export default EditPost
