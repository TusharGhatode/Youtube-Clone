import React, { useEffect, useState } from 'react'
import Videos from './Videos'
import { fetchFromAPI } from './apifetch/FetchFromApi';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Loader from './Loader';

const ChannelDetails = () => {

  const { channelid } = useParams()
  const [owner, setOwner] = useState();
  const [videos, setVideos] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetchFromAPI(`channels?id=${channelid}&part=snippet`)
      .then((data) => setOwner(data.items[0]))


    fetchFromAPI(`search?channelId=${channelid}&part=snippet`)
      .then((data) => setVideos(data.items))

    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, []);


  return (

    <div>

      {
        loading === false ? <div >
          
          <div className=''>
            <img src="/bg3.jpeg" alt="" className='object-cover h-[30vh] sm:h-[40vh] w-full' />
          </div>
          <div className='flex sm:mx-8 flex-wrap flex-col gap-4 items-center justify-center pl-2 -mt-8 sm:-mt-16'>
            <div className="avatar">
              <div className="w-16 sm:w-24 mask mask-squircle">
               
                <img src={owner?.snippet?.thumbnails?.medium?.url} />
              </div>
            </div>
            <div >
              <div className='flex flex-wrap justify-center w-full'>
                <h2 className='text-md lg:text-xl font-extrabold'>{owner?.brandingSettings?.channel?.title}</h2>
              </div>

              <div className='flex flex-wrap justify-center w-full'>
                <p className='text-sm mt-1 mb-4 font-semibold text-gray-500'>{owner?.statistics?.viewCount} Views</p>
              </div>

              <div className='flex flex-wrap justify-center w-full'>
                <h2 className='text-sm lg:text-md font-semibold'>{owner?.snippet?.description}</h2>
              </div>




            </div>

            <div className='flex flex-wrap gap-2 justify-center'>
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
        </div> : <Loader />
      }

    </div>
  )
}

export default ChannelDetails
