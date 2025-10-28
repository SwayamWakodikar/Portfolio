import React from 'react'
import assets from '../assets/assets'

const Profile = () => {
  return (

    <div className="w-screen h-auto">
      <div className="flex justify-between items-center text-4xl font-bold bg-linear-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent p-4">
        {/*Profile Image tab*/}
        <div className="flex flex-col items-start ml-4">
          <img
            src={assets[0]}
            alt="Profile"
            className="h-72 w-72 rounded-full object-cover border-2 border-black"
          />
          <div className="text-black font-bold pb-2 text-lg mt-2">
            Student | Tech Enthusiast <br />
            Developer | Electronics Geek
          </div>
        </div>
        {/*Skills Tab */}
        <div className="bg-amber-300 p-4 rounded-xl shadow-md text-black text-lg">
          Skill Tab / Info
        </div>

      </div>

    </div>

  )
}

export default Profile