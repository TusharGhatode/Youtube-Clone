import React, { useState, useEffect } from 'react'
import { CgArrowsExchange } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import { TbHomeShare } from "react-icons/tb";
import { GiMusicSpell } from "react-icons/gi";
import { SiYoutubegaming } from "react-icons/si";
import { IoFastFood } from "react-icons/io5";
import { PiAirplaneBold } from "react-icons/pi";
import { MdOnlinePrediction } from "react-icons/md";
import { PiBoxingGloveBold } from "react-icons/pi";
import { SiSkyrock } from "react-icons/si";
import { PiNewspaperClippingBold } from "react-icons/pi";
import { CgGhostCharacter } from "react-icons/cg";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaFreeCodeCamp } from "react-icons/fa"
import { RiMovie2Fill } from "react-icons/ri";
import Videos from './Videos';
import Header from './Header';
import { fetchFromAPI } from './apifetch/FetchFromApi';
import Loader from './Loader';

const Body = () => {
    const [category, setCategory] = useState('ᴍᴜꜱɪᴄ')
    const [videos, setVideos] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetchFromAPI(`search?q=${category}&part=snippet%2Cid&regionCode=IN&maxResults=50&order=date`)
            .then((data) => setVideos(data.items))
            .catch((err) => console.log('err->> ', err))

    }, [category]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <div>

            {
                loading === false ? <div>

                    <Header />
                    <div className='px-4 overflow-hidden scrollbar-hide '>


                        {/* desktop view */}
                        <div className='sm:block hidden'>

                            {/* ɴᴇᴡ */}
                            <div className='sm:flex sm:w-full sm:h-[80vh]  '>
                                <div className="left  sm:h-screen sm:w-[20%] p-2 overflow-y-scroll">


                                    <div className=' flex  cursor-pointer items-center justify-center bg-gray-500 rounded-xl px-4 h-12 my-4  gap-1' onClick={() => setCategory("ᴍᴜꜱɪᴄ")} style={{ backgroundColor: category === 'ᴍᴜꜱɪᴄ' ? 'red' : null }}>
                                        <GiMusicSpell className='text-lg text-white' />
                                        <h2 className='font-semibold -mt-1 text-white text-sm'>ᴍᴜꜱɪᴄ</h2>
                                    </div>

                                    <div className=' flex  cursor-pointer items-center justify-center bg-gray-500 rounded-xl px-4 h-12 my-4  gap-1' onClick={() => {
                                        setCategory("ɴᴇᴡ")
                                    }} style={{ backgroundColor: category === 'ɴᴇᴡ' ? 'red' : null }}>
                                        <TbHomeShare className='text-md text-white' />
                                        <h2 className='font-semibold -mt-1 text-white text-sm'>ɴᴇᴡ</h2>
                                    </div>

                                    <div className='flex  cursor-pointer items-center justify-center bg-gray-500 rounded-xl px-4 h-12 my-4  gap-1' onClick={() => {
                                        setCategory("ʟɪᴠᴇ")
                                    }} style={{ backgroundColor: category === 'ʟɪᴠᴇ' ? 'red' : null }}>
                                        <MdOnlinePrediction className='text-lg text-white' />
                                        <h2 className='font-semibold -mt-1 text-white text-sm'>ʟɪᴠᴇ</h2>
                                    </div>

                                    <div className='flex  cursor-pointer items-center justify-center bg-gray-500 rounded-xl px-4 h-12 my-4  gap-1' onClick={() => {
                                        setCategory("ɢᴀᴍɪɴɢ")
                                    }
                                    } style={{ backgroundColor: category === 'ɢᴀᴍɪɴɢ' ? 'red' : null }} >
                                        <SiYoutubegaming className='text-lg text-white' />
                                        <h2 className='font-semibold -mt-1 text-white text-sm'>ɢᴀᴍɪɴɢ</h2>
                                    </div>

                                    <div className='flex  cursor-pointer items-center justify-center bg-gray-500 rounded-xl px-4 h-12 my-4  gap-1' onClick={() => {
                                        setCategory("ꜰᴏᴏᴅ")
                                    }} style={{ backgroundColor: category === 'ꜰᴏᴏᴅ' ? 'red' : null }}>
                                        <IoFastFood className='text-lg text-white' />
                                        <h2 className='font-semibold -mt-1 text-white text-sm'>ꜰᴏᴏᴅ</h2>
                                    </div>

                                    <div className='flex  cursor-pointer items-center justify-center bg-gray-500 rounded-xl px-4 h-12 my-4  gap-1' onClick={() => {
                                        setCategory("ᴛʀᴀᴠᴇʟʟɪɴɢ")
                                    }} style={{ backgroundColor: category === 'ᴛʀᴀᴠᴇʟʟɪɴɢ' ? 'red' : null }}>
                                        <PiAirplaneBold className='text-lg text-white' />
                                        <h2 className='font-semibold -mt-1 text-white text-sm'>ᴛʀᴀᴠᴇʟʟɪɴɢ</h2>
                                    </div >

                                    <div className='flex  cursor-pointer items-center justify-center bg-gray-500 rounded-xl px-4 h-12 my-4  gap-1' onClick={() => {
                                        setCategory("ᴅᴀɴᴄᴇ")
                                    }} style={{ backgroundColor: category === 'ᴅᴀɴᴄᴇ' ? 'red' : null }}>
                                        <SiSkyrock className='text-lg text-white' />
                                        <h2 className='font-semibold -mt-1 text-white text-sm'>ᴅᴀɴᴄᴇ</h2>
                                    </div>

                                    <div className='flex  cursor-pointer items-center justify-center bg-gray-500 rounded-xl px-4 h-12 my-4  gap-1' onClick={() => {
                                        setCategory("ᴡʀᴇꜱᴛʟɪɴɢ")
                                    }} style={{ backgroundColor: category === 'ᴡʀᴇꜱᴛʟɪɴɢ' ? 'red' : null }}>
                                        <PiBoxingGloveBold className='text-lg text-white' />
                                        <h2 className='font-semibold -mt-1 text-white text-sm'>ᴡʀᴇꜱᴛʟɪɴɢ</h2>
                                    </div>

                                    <div className='flex  cursor-pointer items-center justify-center bg-gray-500 rounded-xl px-4 h-12 my-4  gap-1' onClick={() => {
                                        setCategory("ɴᴇᴡꜱ")
                                    }} style={{ backgroundColor: category === 'ɴᴇᴡꜱ' ? 'red' : null }}>
                                        <PiNewspaperClippingBold className='text-lg text-white' />
                                        <h2 className='font-semibold -mt-1 text-white text-sm'>ɴᴇᴡꜱ</h2>
                                    </div>

                                    <div className='flex  cursor-pointer items-center justify-center bg-gray-500 rounded-xl px-4 h-12 my-4  gap-1' onClick={() => {
                                        setCategory("ᴄᴀʀᴛᴏᴏɴ")
                                    }} style={{ backgroundColor: category === 'ᴄᴀʀᴛᴏᴏɴ' ? 'red' : null }}>
                                        <CgGhostCharacter className='text-lg text-white' />
                                        <h2 className='font-semibold -mt-1 text-white text-sm'>ᴄᴀʀᴛᴏᴏɴ</h2>
                                    </div>

                                    <div className='flex  cursor-pointer items-center justify-center bg-gray-500 rounded-xl px-4 h-12 my-4  gap-1' onClick={() => {
                                        setCategory("ᴅɪꜱᴄᴏᴠᴇʀʏ")
                                    }} style={{ backgroundColor: category === 'ᴅɪꜱᴄᴏᴠᴇʀʏ' ? 'red' : null }}>
                                        <FaEarthAmericas className='text-lg text-white' />
                                        <h2 className='font-semibold -mt-1 text-white text-sm'>ᴅɪꜱᴄᴏᴠᴇʀʏ</h2>
                                    </div>

                                    <div className='flex  cursor-pointer items-center justify-center bg-gray-500 rounded-xl px-4 h-12 my-4  gap-1' onClick={() => {
                                        setCategory("ᴄᴏᴅɪɴɢ")
                                    }} style={{ backgroundColor: category === 'ᴄᴏᴅɪɴɢ' ? 'red' : null }}>
                                        <FaFreeCodeCamp className='text-lg text-white' />
                                        <h2 className='font-semibold -mt-1 text-white text-sm'>ᴄᴏᴅɪɴɢ</h2>
                                    </div>

                                    <div className='flex  cursor-pointer items-center justify-center bg-gray-500 rounded-xl px-4 h-12 my-4  gap-1' onClick={() => {
                                        setCategory("ᴛʀᴀɪʟᴇʀꜱ")
                                    }} style={{ backgroundColor: category === 'ᴛʀᴀɪʟᴇʀꜱ' ? 'red' : null }}>
                                        <RiMovie2Fill className='text-lg text-white' />
                                        <h2 className='font-semibold -mt-1 text-white text-sm'>ᴛʀᴀɪʟᴇʀꜱ</h2>
                                    </div>
                                </div>

                                <div className="right  p-4 sm:h-full overflow-y-scroll sm:w-[80%] ">
                                    <h1 className='text-2xl my-6 font-bold'>{category} ᴠɪᴅᴇᴏꜱ</h1>

                                    <div className='flex flex-wrap gap-4'>
                                        <Videos videos={videos} />
                                    </div>


                                </div>
                            </div >
                        </div >



                        {/* mobile view */}


                        <div div className='h-[68vh] block sm:hidden  mt-4 overflow-y-scroll scrollbar-hide' >
                            <div className='flex sm:px-4 flex-wrap justify-between items-center'>
                                <h1 className='text-lg mt-6 mb-1 font-bold'>{category} ᴠɪᴅᴇᴏꜱ</h1>

                                <CgArrowsExchange className='text-2xl' />
                            </div>

                            <div className='flex gap-4 sm:px-4 overflow-x-scroll scrollbar-hide items-center my-4'>
                                <Videos videos={videos} />
                            </div>

                        </div>


                        <div className=' sm:hidden flex sm:px-4 items-center h-[8vh] gap-2 overflow-x-scroll scrollbar-hide'>

                            <div className=' flex cursor-pointer  bg-gray-500 rounded-xl px-4 h-8  justify-center items-center gap-1' onClick={() => setCategory("ᴍᴜꜱɪᴄ")} style={{ backgroundColor: category === 'ᴍᴜꜱɪᴄ' ? 'red' : null }}>
                                <GiMusicSpell className='text-lg text-white' />
                                <h2 className='font-semibold -mt-1 text-white text-sm'>ᴍᴜꜱɪᴄ</h2>
                            </div>

                            <div className=' flex  cursor-pointer items-center justify-center bg-gray-500 rounded-xl px-4 h-8  gap-1' onClick={() => setCategory("ɴᴇᴡ")} style={{ backgroundColor: category === 'ɴᴇᴡ' ? 'red' : null }}>
                                <TbHomeShare className='text-md text-white' />
                                <h2 className='font-semibold -mt-1 text-white text-sm'>ɴᴇᴡ</h2>
                            </div>

                            <div className=' flex cursor-pointer  bg-gray-500 rounded-xl px-4 h-8  justify-center items-center gap-1' onClick={() => setCategory("ʟɪᴠᴇ")} style={{ backgroundColor: category === 'ʟɪᴠᴇ' ? 'red' : null }}>
                                <MdOnlinePrediction className='text-lg text-white' />
                                <h2 className='font-semibold -mt-1 text-white text-sm'>ʟɪᴠᴇ</h2>
                            </div>

                            <div className=' flex cursor-pointer  bg-gray-500 rounded-xl px-4 h-8  justify-center items-center gap-1' onClick={() => setCategory("ɢᴀᴍɪɴɢ")} style={{ backgroundColor: category === 'ɢᴀᴍɪɴɢ' ? 'red' : null }}>
                                <SiYoutubegaming className='text-lg text-white' />
                                <h2 className='font-semibold -mt-1 text-white text-sm'>ɢᴀᴍɪɴɢ</h2>
                            </div>

                            <div className=' flex cursor-pointer  bg-gray-500 rounded-xl px-4 h-8  justify-center items-center gap-1' onClick={() => setCategory("ꜰᴏᴏᴅ")} style={{ backgroundColor: category === 'ꜰᴏᴏᴅ' ? 'red' : null }}>
                                <IoFastFood className='text-lg text-white' />
                                <h2 className='font-semibold -mt-1 text-white text-sm'>ꜰᴏᴏᴅ</h2>
                            </div>

                            <div className=' flex cursor-pointer  bg-gray-500 rounded-xl px-4 h-8  justify-center items-center gap-1 ' onClick={() => setCategory("ᴛʀᴀᴠᴇʟʟɪɴɢ")} style={{ backgroundColor: category === 'ᴛʀᴀᴠᴇʟʟɪɴɢ' ? 'red' : null }}>
                                <PiAirplaneBold className='text-lg text-white' />
                                <h2 className='font-semibold -mt-1 text-white text-sm'>ᴛʀᴀᴠᴇʟʟɪɴɢ</h2>
                            </div>

                            <div className=' flex cursor-pointer  bg-gray-500 rounded-xl px-4 h-8  justify-center items-center gap-1 ' onClick={() => setCategory("ᴅᴀɴᴄᴇ")} style={{ backgroundColor: category === 'ᴅᴀɴᴄᴇ' ? 'red' : null }}>
                                <SiSkyrock className='text-lg text-white' />
                                <h2 className='font-semibold -mt-1 text-white text-sm'>ᴅᴀɴᴄᴇ</h2>
                            </div>

                            <div className=' flex cursor-pointer  bg-gray-500 rounded-xl px-4 h-8  justify-center items-center gap-1 ' onClick={() => setCategory("ᴡʀᴇꜱᴛʟɪɴɢ")} style={{ backgroundColor: category === 'ᴡʀᴇꜱᴛʟɪɴɢ' ? 'red' : null }}>
                                <PiBoxingGloveBold className='text-lg text-white' />
                                <h2 className='font-semibold -mt-1 text-white text-sm'>ᴡʀᴇꜱᴛʟɪɴɢ</h2>
                            </div>

                            <div className='flex cursor-pointer  bg-gray-500 rounded-xl px-4 h-8  justify-center items-center gap-1 ' onClick={() => setCategory("ɴᴇᴡꜱ")} style={{ backgroundColor: category === 'ɴᴇᴡꜱ' ? 'red' : null }}>
                                <PiNewspaperClippingBold className='text-lg text-white' />
                                <h2 className='font-semibold -mt-1 text-white text-sm'>ɴᴇᴡꜱ</h2>
                            </div>

                            <div className='flex cursor-pointer  bg-gray-500 rounded-xl px-4 h-8  justify-center items-center gap-1 ' onClick={() => setCategory("ᴄᴀʀᴛᴏᴏɴ")} style={{ backgroundColor: category === 'ᴄᴀʀᴛᴏᴏɴ' ? 'red' : null }}>
                                <CgGhostCharacter className='text-lg text-white' />
                                <h2 className='font-semibold -mt-1 text-white text-sm'>ᴄᴀʀᴛᴏᴏɴ</h2>
                            </div>

                            <div className='flex cursor-pointer  bg-gray-500 rounded-xl px-4 h-8  justify-center items-center gap-1 ' onClick={() => setCategory("ᴅɪꜱᴄᴏᴠᴇʀʏ")} style={{ backgroundColor: category === 'ᴅɪꜱᴄᴏᴠᴇʀʏ' ? 'red' : null }}>
                                <FaEarthAmericas className='text-lg text-white' />
                                <h2 className='font-semibold -mt-1 text-white text-sm'>ᴅɪꜱᴄᴏᴠᴇʀʏ</h2>
                            </div>

                            <div className='flex cursor-pointer  bg-gray-500 rounded-xl px-4 h-8  justify-center items-center gap-1 ' onClick={() => setCategory("ᴄᴏᴅɪɴɢ")} style={{ backgroundColor: category === 'ᴄᴏᴅɪɴɢ' ? 'red' : null }}>
                                <FaFreeCodeCamp className='text-lg text-white' />
                                <h2 className='font-semibold -mt-1 text-white text-sm'>ᴄᴏᴅɪɴɢ</h2>
                            </div>

                            <div className='flex cursor-pointer  bg-gray-500 rounded-xl px-4 h-8  justify-center items-center gap-1 ' onClick={() => setCategory("ᴛʀᴀɪʟᴇʀꜱ")} style={{ backgroundColor: category === 'ᴛʀᴀɪʟᴇʀꜱ' ? 'red' : null }}>
                                <RiMovie2Fill className='text-lg text-white' />
                                <h2 className='font-semibold -mt-1 text-white text-sm'>ᴛʀᴀɪʟᴇʀꜱ</h2>
                            </div>

                        </div>

                    </div >

                </div> : <Loader />
            }

        </div>
    )
}

export default Body
