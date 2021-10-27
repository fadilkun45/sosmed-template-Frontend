import { useState } from 'react'
import { Link } from 'react-router-dom'

const ForgotPass = () => {
    let [successalert , setSuccessAlert ] = useState(true)

    return (

        <div className="container flex justify-around w-full h-screen items-center">
        <div className="container ">
        {
            successalert ? <div className="px-4 py-2 text-base bg-green-100 text-green-600 text-center w-5/6 mx-auto">
            <p>cek email mu sat</p>
        </div> : ''
            }
        <h1 className="text-xl text-center font-bold text-blue-600 my-3">Forgot your Password ?</h1>
        <form action="#" className="w-4/6 mx-auto  px-3 py-2 rounded-lg">
            <div className="flex flex-col px-3 py-2  bg-gray-100 mb-3">
            <label htmlFor="username" className="text-xs font-bold">input your username here</label>
            <input type="text" id="username" autoComplete="none" className="outline-none bg-gray-100 focus:border-b-2 "/>
            </div>
           
            <div className="flex flex-col px-3 py-2 ">
                <button className="px-3 py-2 text-center bg-blue-600 text-white">submit </button>
            </div>
        </form>
        <p className="text-center">Login <Link to="/login" className="font-bold text-blue-600">click here</Link></p>
    </div>
   </div>
    )
}

export default ForgotPass
