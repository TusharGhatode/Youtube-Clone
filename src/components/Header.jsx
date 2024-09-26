import React,{useState,useEffect} from 'react'
import { FaSearch } from "react-icons/fa";
import { fetchFromAPI } from './apifetch/FetchFromApi';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [inputValue, setInputvalue] = useState('');
   

    const handleSubmit = (e) => {
        e.preventDefault();
       navigate(`/search/${inputValue}`)
    }


    return (
        <div className='px-4 sm:px-8 scrollbar-hide'>
            <div className=' sm:flex items-center sm:justify-between  h-[15vh] scrollbar-hide '>
                <div className=" flex  flex-wrap gap-2 items-center  justify-between " >
                    <div className='flex pt-3 flex-wrap cursor-pointer sm:mt-4 gap-2 items-center '>
                        <img src="youtube.png" className='h-12 w-12 sm:h-10 sm:w-10' alt="" />
                        <h3 className=' text-xl font-extrabold sm:text-lg'>YouTube</h3>
                    </div>


                    <div className=" cursor-pointer pt-3 sm:hidden items-center mr-2 dropdown dropdown-bottom dropdown-end">
                       

                        <ul tabIndex={0} className="dropdown-content z-50 menu p-2 rounded-box w-52 shadow-lg bg-red-200">
                        <h2 className='text-xl flex flex-wrap justify-center rounded-xl p-2'><span className='font-semibold mr-1'>ɴᴀᴍᴇ: </span> user</h2>
                        <h2 className='text-xl flex flex-wrap border-2 border-red-400 mt-2 hover:bg-red-400 hover:text-white justify-center rounded-xl p-2' >ʟᴏɢᴏᴜᴛ</h2>
                    </ul>
                    </div>

                </div>

                <form className='flex mt-4 flex-wrap bg-gray-300 rounded-full sm:w-[40%]  justify-between items-center px-1' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Search...' className='pl-2 h-10 my-0.5 bg-gray-300 w-[82%] rounded-full sm:w-[80%] focus:outline-0 text-md text-black' onChange={(e)=>setInputvalue(e.target.value)} value={inputValue}/>

                    <div className='h-9 w-9  sm:h-8 sm:w-8 bg-gray-700 rounded-full items-center flex flex-wrap justify-center'>
                        <FaSearch className='text-white' />
                    </div>

                </form>


                <div className='cursor-pointer sm:mt-4 hidden sm:block sm:items-center sm:mr-4 dropdown dropdown-bottom dropdown-end'>

                    <ul tabIndex={0} className="dropdown-content z-50 menu p-2 rounded-box w-52 shadow-lg bg-red-200">
                        <h2 className='text-xl flex flex-wrap justify-center rounded-xl p-2'><span className='font-semibold mr-1'>ɴᴀᴍᴇ: </span> user</h2>
                        <h2 className='text-xl flex flex-wrap border-2 border-red-400 mt-2 hover:bg-red-400 hover:text-white justify-center rounded-xl p-2'>ʟᴏɢᴏᴜᴛ</h2>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
