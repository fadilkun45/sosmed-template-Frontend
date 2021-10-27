import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    let [successalert , setSuccessAlert ] = useState(true)


    return (
        <>

       <div className="container flex justify-around w-full h-screen items-center">
            <div className="container ">
            {
            successalert ? <div className="px-4 py-2 text-base bg-red-100 text-red-600 text-center w-5/6 mx-auto">
            <p>failed</p>
        </div> : ''
            }
            <h1 className="text-xl text-center font-bold text-blue-600 my-3">Login</h1>
            <form action="#" className="w-4/6 mx-auto  px-3 py-2 rounded-lg">
                <div className="flex flex-col px-3 py-2  bg-gray-100 mb-3">
                <label htmlFor="username" className="font-bold">Username</label>
                <input type="text"  className="outline-none bg-gray-100 focus:border-b-2 "/>
                </div>
                <div className="flex flex-col px-3 py-2  bg-gray-100 mb-3">
                <label htmlFor="password" className="font-bold">password</label>
                <input type="password"  className="outline-none bg-gray-100 focus:border-b-2 "/>
                </div>
                <div className="flex flex-col px-3 py-2 ">
                    <button className="px-3 py-2 text-center bg-blue-600 text-white">Login </button>
                </div>
            </form>
            <p className="text-center w-5/6 mx-auto">Forgot Your Password ? <Link to="/forgotpassword" className="font-bold text-blue-600">click here</Link> or your no have account <Link to="/register" className="font-bold text-blue-600">register here</Link></p>
        </div>
       </div>
       </>
    )
}

export default Login
