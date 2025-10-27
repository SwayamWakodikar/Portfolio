import React from 'react'
import assets from '../assets/assets'

const Profile = () => {
  return (
    
  <div className="w-screen h-auto">
  <div className="text-center text-4xl font-bold bg-linear-to-r from-indigo-500 to-blue-500 bg-clip-text text-shadow-lg flex">
    <div className=" self-start ml-4">
      <img 
        src={assets[0]} 
        alt="Profile" 
        className=" h-72 w-72 rounded-full object-cover border-2 border-black"
      />
      <div className='text-black font-bold pb-2'>
        Student | Tech Enthusiast
        <br />
        Developer | Electronics Geek
    </div>
    {/* Add Skill tab here */}
    <div>
      
    </div>
    </div>
    
  </div>
</div>

  )
}

export default Profile