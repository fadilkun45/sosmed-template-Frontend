import React,{useState} from 'react'
import cover from '../assets/img/cover.jpg'
import profile from '../assets/img/dumny.jpeg'
import Friends from '../component/Profile/Friends'
import ImageModal from '../component/Profile/ImageModal'
import Post from '../component/Profile/Post'
import Settings from '../component/Profile/Settings'
import ScrollHidden from '../utility/ScrollHidden'


const Profile = () => {

    let [modalsettings, setmodalsettings] = useState(false)
    let [modalfriends, setmodalfriends] = useState(false)

    let [imagemodal, setimageModal] = useState(false)
    let [imageclick, setimageclick] = useState()


    const settingsHanlde = () => {
        modalsettings ? setmodalsettings(false) : setmodalsettings(true)
        modalsettings ?  ScrollHidden("auto") : ScrollHidden("hidden")  
     }

     const friendsHanlde = () => {
        modalfriends ? setmodalfriends(false) : setmodalfriends(true)
        modalfriends ?  ScrollHidden("auto") : ScrollHidden("hidden")  
     }

     const imageHandle = (image) => {
        imagemodal ? setimageModal(false) : setimageModal(true)
        imagemodal ?  ScrollHidden("auto") : ScrollHidden("hidden") 
        setimageclick(image)
     }



    return (
       <div className="container mb-14">
           <div className="flex flex-col bg-custom-100">
           <div className="cover w-full">
            <img src={cover} alt="cover" className="w-full h-16 object-cover" onClick={() => imageHandle(cover)} />
           </div>
            <div className="profile flex ml-5 mx-auto transform -translate-y-8">
                <img src={profile} alt="profile" onClick={() => imageHandle(profile)}  className="rounded-full w-24 h-24 border-4 border-white object-cover"/>
                <div className="name mt-10 ml-5 w-4/6">
                    <div className="flex items-center mb-1">
                    <h1 className="text-xl font-bold">Elaina ramadhan</h1>

                    <svg class="w-6 h-6 text-blue-600 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

                    </div>
                    <h2 className="text-xs ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi adipisci delectus eligendi nisi voluptatum ad?</h2>

                </div>
            </div>

            <div className="flex flex-col -mt-6 mx-auto w-5/6 ">
                <div className="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    <p className="text-sm " onClick={friendsHanlde}>friends : 56</p>
                </div>
            </div>


            {/* modal settings */}
            {
                modalsettings ? <Settings handle={settingsHanlde} /> : ""
            }
             {/* modal friend */}
             {
                modalfriends ? <Friends handle={friendsHanlde} /> : ""
            }

            <div className="flex  flex-col pb-5 ">
                <div className="hidden flex items-center justify-center text-white bg-blue-500 w-5/6 py-1 text-sm  mx-auto rounded-sm">
                <p className="text-center text-base">Add Friend</p>
                <svg class="w-4 h-4 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                </div>
                <div className="hidden flex items-center mt-3 justify-center text-white bg-blue-500 w-5/6 py-1 text-sm  mx-auto rounded-sm">
                <p className="text-center text-base">Remove Friend</p>
                <svg class="w-4 h-4 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"></path></svg>
                </div>

                <div className="flex items-center mt-3 justify-center text-white bg-blue-500 w-5/6 py-1 text-sm  mx-auto rounded-sm" onClick={settingsHanlde}>
                <p className="text-center text-base">settings account</p>
                </div>
            </div>

           </div>
           {/* image modal on modal click */}
           {
                    imagemodal ? <ImageModal  imageHandle={imageHandle} image={imageclick}/> : ""
            }
           <div className="post mt-4">
               <Post textpost={" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, maiores."} />
               <Post textpost={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga deleniti mollitia exercitationem rerum veniam nostrum fugit, numquam velit eaque quam!"}/> 
               <Post />
           </div>
       </div>
    )
}

export default Profile
