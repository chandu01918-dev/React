import React from 'react'
import video from "../assets/video.mp4";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const page = useNavigate();
  
  return (
    <div class="video-section">
    <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        width="100%"
      />
      <div className="text">
        <h1>Capturing Moments, Creating Memories</h1>
        <p>
          Welcome to <span>Pixel Photography</span> — where every click tells a story.
        </p>
        <button onClick={()=>page("/Services")}>Move to Services</button>
      </div>
    </div>
  )
}
