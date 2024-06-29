import React from 'react'
import { PiUserCircle } from "react-icons/pi";
import { useSelector } from 'react-redux';

const Avatar = ({userId,name,imageUrl,width,height}) => {
    const onlineUser = useSelector(state => state?.user?.onlineUser)

    //Amit Prajapati

    let avatarName = ""

    if(name){
      const splitName = name?.split(" ")

      if(splitName.length > 1){
        avatarName = splitName[0][0]+splitName[1][0]
      }else{
        avatarName = splitName[0][0]
      }
    }

    const bgColor = [
      'bg-slate-200',
      'bg-teal-200',
      'bg-red-200',
      'bg-green-200',
      'bg-yellow-200',
      'bg-gray-200',
      "bg-cyan-200",
      "bg-sky-200",
      "bg-blue-200"
    ]

    const randomNumber = Math.floor(Math.random() * 9)

    const isOnline = onlineUser.includes(userId)
  return (
    <div className={`relative inline-block shadow rounded-full`}>
      {imageUrl ? (
        <img
          src={imageUrl}
          width={width}
          height={height}
          alt={name}
          style={{ width: width + "px", height: height + "px" }}
          className="rounded-full shadow-2xl"
        />
      ) : name ? (
        <div
          style={{ width: width + "px", height: height + "px" }}
          className={`flex items-center justify-center text-xl font-bold rounded-full ${bgColor[randomNumber]}`}
        >
          {avatarName}
        </div>
      ) : (
        <PiUserCircle size={width} />
      )}
      {isOnline && (
        <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-3 h-3 border-2 border-white"></div>
      )}
      {!isOnline && (
        <div className="absolute bottom-0 right-0 bg-red-500 rounded-full w-3 h-3 border-2 border-white"></div>
      )}
    </div>
    
    
  )
}

export default Avatar
