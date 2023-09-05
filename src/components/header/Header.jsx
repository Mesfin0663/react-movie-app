import React, { useState } from 'react'
import './header.css'
import backgroind1 from "../../assets/background3.jpg"
import { backgroundImagesList } from './background'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
function Header() {
  const [activeImageNum, setCurrent] = useState(0);
  const length = backgroundImagesList.length;
  const nextSlide = () => {
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };
  const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };

  return (
    <div className='header_container'>
      <div class="left">
        <ArrowBackIos onClick={prevSlide} />
      </div>
      <div class="right">
        <ArrowForwardIos onClick={nextSlide} />
      </div>

      {
        backgroundImagesList.map((img, index) => (
          <div key={index}>
            {
              activeImageNum == index ? <div className='header_wrapper'>
                <div className='header_movie_about'>
                  <h1 className='header_movie_title'>{img.movieTitle}</h1>
                  <p className='header_movie_description'>{img.description}</p>
                  <div className='header_small_details'>
                    <button>HD</button> <p>R</p> <div className='center'><StarBorderIcon />3.6</div> <p>2021</p>
                  </div>
                   <div className='left-side header_buttons'>
                    <div className="center btn mb mr">
                    <PlayCircleIcon/>
                    <p className='nav_watch_btn'>Watch Now</p>
                    </div>
                   {/* <button >Watch Now</button> */}
                   <div className='center'>  <BookmarkBorderIcon/> Bookmark</div>

                   </div>
                </div>
                <img className='header_background' src={img.url} alt="background" />
              </div> : <></>
            }
          </div>

        ))
      }
      {/* <img className='header_background' src={backgroind1} alt="background" /> */}
    </div>
  )
}

export default Header
