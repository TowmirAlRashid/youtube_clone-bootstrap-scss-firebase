import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import './_videos.scss'

const Videos = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/D7eFpRf4tac/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEInnPVOVEm3gTILn9DpqPBtsssw"
          alt="groot"
        />
        <span className="video__top__duration">05:43</span>
      </div>

      <div className="video__title">Create an App in 69 Seconds</div>

      <div className="video__details">
        <span>
          <AiFillEye /> 5M Views •
        </span>

        <span> 5 Days Ago</span>
      </div>

      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s68-c-k-c0x00ffffff-no-rj"
          alt="channel logo"
        />
        <p>69 App Designer</p>
      </div>
    </div>
  );
}

export default Videos