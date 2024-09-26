import React, { useState, useEffect } from 'react'
import Loader from './Loader'
import Videos from './Videos.jsx'
import Header from './Header.jsx'
import { useNavigate, useParams, Link } from 'react-router-dom';
import { fetchFromAPI } from './apifetch/FetchFromApi';
import { FaSearch } from "react-icons/fa";


const SearchPage = () => {
    const [loading, setLoading] = useState(true)
    const [videos, setVideos] = useState(null);
    const [inputValue, setInputvalue] = useState('');
    const navigate = useNavigate();

    const { search } = useParams()

    console.log(search)
    useEffect(() => {
        fetchFromAPI(`search?q=${search}&part=snippet`)
            .then((data) => setVideos(data.items))

        setTimeout(() => {
            setLoading(false)
        }, 2000)

    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${inputValue}`)
        window.location.reload()
    }

    console.log(videos)

    return (
        <div>

            {
                loading === false ? <div>
                    <div className='flex flex-wrap justify-center '>
                        <form onSubmit={handleSubmit} className='bg-gray-300 rounded-full mt-8 w-[80vw] sm:w-[60vw] p-1 flex justify-between'>
                            <input type="text" placeholder={search} onChange={(e) => setInputvalue(e.target.value)} value={inputValue} className='rounded-full w-full mr-2 h-8 sm:w-full sm:mr-4 pl-2 outline-none text-sm text-black' />

                            <div className='h-8 w-8 px-2  sm:h-8 sm:w-8 bg-gray-700 rounded-full items-center flex flex-wrap justify-center'>
                                <FaSearch className='text-white' />
                            </div>

                        </form>
                    </div>
                    <div>
                        <div className="right  p-4 sm:h-full overflow-y-scroll px-8">
                            <h1 className='text-2xl my-6 font-bold'>ꜱᴇᴀʀᴄʜ ʀᴇꜱᴜʟᴛ</h1>
                            <div>

                                {
                                    loading === false ? (
                                        <div className='flex flex-wrap cursor-pointer justify-center gap-4'>
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
                                                                            <p className='text-[80%] font-semibold'>{elem?.snippet.title.slice(0, 20)}</p>

                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            </Link>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    ) : <div className='flex flex-wrap gap-4'>
                                        {
                                            videos && videos.map && videos.map((elem, index) => {
                                                return (
                                                    <Loader />
                                                )
                                            })
                                        }
                                    </div>
                                }

                            </div>
                        </div>
                    </div >

                </div> : <Loader />
            }


        </div>
    )
}

export default SearchPage
