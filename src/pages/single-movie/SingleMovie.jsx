import React from 'react'
import movie1 from '../../assets/movie1.mp4'

function SingleMovie() {
  return (
    <div>
 <div>
      <h2>Video Player</h2>
      <video src={movie1} width="800" height="400" controls />
    </div>    </div>
  )
}

export default SingleMovie
