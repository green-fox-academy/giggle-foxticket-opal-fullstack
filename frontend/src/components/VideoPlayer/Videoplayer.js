import React from 'react'
import ReactPlayer from 'react-player/youtube'
import './VideoPlayer.styles.sass';

export default function () {
  return (
    <div className="video">
      <ReactPlayer url='https://www.youtube.com/watch?v=qREKP9oijWI' controls={true} />
    </div>
  )
}

