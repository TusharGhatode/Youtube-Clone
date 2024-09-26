import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Videos = ({ videos }) => {
    
    return (
        <div>
            <div className='flex flex-wrap gap-4 justify-center'>
                {
                    videos && videos.map && videos.map((elem, index) => {

                        return (

                            <div key={index} >
                                <Link to={`/play/${elem?.id?.videoId}/${elem?.snippet.channelId}`}>
                                    <div className="card w-full rounded-xl cursor-pointer sm:w-56 lg:w-60  glass z-10">
                                        <figure className=' w-full object-cover '><img src={elem?.snippet?.thumbnails?.medium?.url} alt="car!" className='object-cover h-40 w-[100vw] ' /></figure>

                                        <div className='flex flex-wrap items-center gap-2 px-1.5 py-4'>
                                            <div className="avatar">
                                                <div className="w-8 sm:w-8 mask mask-squircle">
                                                    <img src={elem?.snippet?.thumbnails?.medium?.url} />
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[80%] font-semibold'>{elem?.snippet.title.slice(0,20)}</p>

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
    )
}

export default Videos
