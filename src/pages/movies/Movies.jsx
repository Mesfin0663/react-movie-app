import React, { useEffect, useState } from 'react'
import fetchFromApi from '../../config/fetchFromApi'
import './movie.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import { CircularProgress } from '@mui/material'
function Movies() {
  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [endPoint, setEndPoint] = useState("/titles?year=2023&genre=Action&page=1")

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetchFromApi(endPoint).then((res) => {
      console.log("fetching data", movieList)

      console.log(res.data);
      setEndPoint(res.data.next)
      console.log(res.data.next)

      setMovieList( [...movieList, ...res.data.results]);
      // setLoading(false)
    }).catch(err => {
      console.log(err)
      setError(err)
      // setLoading(false)
    })
  }
  return (
    <div className='movie_container'>
      {
       
          <div className='movie_wrapper'>
            {/* {
              movieList?.map((movie) => (
                <div className='movie_card'>
                  <h1 className='movie_title'>{movie.originalTitleText.text}</h1>
                  <img className='movie_img' src={movie.primaryImage?.url} alt="" />
                  <p className='movie_description'>{movie.releaseDate?.year}</p>
                </div>
              ))
            } */}
              <InfiniteScroll
                            dataLength={movieList.length}
                            next={fetchData}
                            hasMore={true} // Replace with a condition based on your data source
                            loader={<div style={{display:"block", justifyContent:"center",alignItems:"center"}}>
                                <CircularProgress/>
                                <div>
                                {error && <p>Error: {error.message}</p>}
                                </div>

                            </div>}
                            endMessage={<p>No more data to load.</p>}
                            style={{ overflowY: 'hidden' }}

                        >
                                                <div className='movie_wrapper'>

                            {
                                movieList.map((movie) => (

                                  <div className='movie_card'>
                                  <img className='movie_img' src={movie.primaryImage?.url} alt="" />
                                  <div className='movie_detail'>

                                  <p className='movie_description'>{movie.releaseDate?.year}</p>
                                  {
                                    movie.titleType.isSeries?<>Series</>:<>Single</>
                                  }
                                {/* <a href="/single-movie"> <p className='movie_description'>{movie.id}</p></a> */}
                                {/* <p>125min</p> */}
                                  </div>
                                                                <h1 className='movie_title'>{movie.originalTitleText.text}</h1>

                                </div>
                                ))
                            }
                                                </div>

                        </InfiniteScroll>
                      
          </div>
      }



    </div>
  )
}

export default Movies
