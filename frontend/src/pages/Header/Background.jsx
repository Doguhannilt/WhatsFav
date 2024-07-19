import React from 'react'
import background_video from '../../assets/background_video.mp4'
import HeaderText from './HeaderText.jsx'
import Navbar from '../Navbar.jsx'

// frontend/src/assets/background_video1.mp4
const Background = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={background_video}
          autoPlay
          loop
          muted
        />
        <HeaderText />
      </div>
    </>
  )
}

export default Background