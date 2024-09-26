import React, { useState, useEffect, useContext } from 'react';
import ReactPlayer from 'react-player'
import { useNavigate, useParams, Link } from 'react-router-dom';
import { fetchFromAPI } from './apifetch/FetchFromApi';
import Loader from './Loader';

const PlayVideo = () => {
  const navigate = useNavigate()

  const { id, channelid } = useParams()
  const [videos, setVideos] = useState([]);
  const [owner, setOwner] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {


    fetchFromAPI(`search?relatedToVideoId=${id}&part=snippet%2Cstatistics`)
      .then((data) => setVideos(data.items))

    fetchFromAPI(`channels?id=${channelid}`)
      .then((data) => setOwner(data.items[0]))


    setTimeout(() => {
      setLoading(false)
    }, 3000)


  }, []);

  return (
    <div>
      {
        loading === false ? <div className='sm:flex '>
          <div className="left sm:w-[70vw] overflow-hidden sm:h-[90vh] sm:p-2">
            <div className='block sm:hidden'>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width="100%" height='40vh' />
            </div>

            <div className='hidden sm:block'>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width="100%" height='70vh' />
            </div>

            <div className='flex flex-wrap gap-4 items-center mt-6 cursor-pointer pl-2' onClick={() => navigate(`/channel/${channelid}`)}>
              <div className="avatar">
                <div className="w-10 sm:w-12 mask mask-squircle">
                  <img src={owner?.brandingSettings?.image?.bannerExternalUrl} />
                </div>
              </div>

              <div>
                <p className='text-sm font-bold'>{owner?.brandingSettings?.channel?.title}</p>
                <p className='text-sm'>{owner?.statistics?.viewCount} views</p>
              </div>


            </div>
          </div>

          <div className="right sm:w-[30vw] overflow-hidden pt-4 sm:h-[90vh] overflow-y-scroll">
            <div className='flex flex-wrap gap-4 p-2 cursor-pointer'>
              {
                videos && videos.map && videos.map((dta, index) => {

                  return (
                    <div key={index} >
                      <Link to={`/play/${dta?.id?.videoId}/${dta?.snippet.channelId}`}>
                   
                        <div className="card w-full rounded-xl cursor-pointer sm:w-56 lg:w-60  glass z-10">
                          <figure className=' w-full object-cover '><img src={dta?.snippet?.thumbnails?.medium?.url} alt="car!" className='object-cover h-40 w-[100vw] ' /></figure>

                          <div className='flex flex-wrap items-center gap-2 px-1.5 py-4'>
                            <div className="avatar">
                              <div className="w-8 sm:w-8 mask mask-squircle">
                                <img src={dta?.snippet?.thumbnails?.medium?.url} />
                              </div>
                            </div>
                            <div>
                              <h2 className='text-sm font-semibold'>{dta?.snippet.title.slice(0, 20)}</h2>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div > : <Loader />
      }



    </div>

  )

}


export default PlayVideo
