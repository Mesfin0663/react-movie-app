import React, { useState } from 'react'
import './trendingVideos.css'
import trending1 from "../../assets/trending1.jpg"
import trending2 from "../../assets/trending2.jpg"
import trending3 from "../../assets/trending3.jpg"
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
function TrendingVideos() {
    const trendingVideosList = [
        {
           url: trending1,
           title:"AHSOKA"
        }
        ,{
            url:trending2,
            title: "THE WHEEL OF TIME"

        }
    ]
    const [activeImageNum, setCurrent] = useState(0);

    const length = trendingVideosList.length;
    const nextSlide = () => {
      setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
    };
    const prevSlide = () => {
      setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
    };
  
  return (
    <div className='trending_container'>
          <div class="trending_top" onClick={nextSlide}>
        <ArrowBackIos />
      </div>
      <div class="trending_bottom" onClick={prevSlide}>
        <ArrowForwardIos/>
      </div>
        <hr className='trending_horizontal_line' />
        <h1 className='trending_title'><LocalFireDepartmentIcon/>Trending Movies <LocalFireDepartmentIcon/></h1>
        {
            trendingVideosList.map((video,index)=>(
                <div key={index} >
                      {
                        activeImageNum ==index?<div className='treding_card'> 
                               <img src={video.url}  className='trending_img'  alt="" />
                                <h1 className='treding_vidio_title'>{video["title"].slice(0,18)}</h1>
                                <div className='trending_overlay'></div>
                        </div>:<></>
                      }
                </div>
            ))
        }
     
       {/* <img src={trending2}  alt="" /> */}
    </div>
  )
}

export default TrendingVideos
