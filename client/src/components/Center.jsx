import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { PiShareFatLight } from "react-icons/pi";

const Center = () => {
  return (
    <main className="flex w-full max-w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
              <h1 className="text-xl font-bold p-6 backdrop-blur bg-white/10 sticky top-0">Home</h1>
              <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2 broder-gray-600 relative">
                <div className="w-11 h-11 bg-slate-400 rounded-full flex-none"></div>
                <div className="flex flex-col w-full h-full">
                    <input type="text" className="w-full h-full text-2xl bg-transparent border-b-[0.5px] broder-gray-600 p-4 outline-none border-none" placeholder="¿Que piensas?"/>
                  <div className="w-full justify-between items-center flex">
                    <div></div>
                    <div className="w-full max-w-[100px]">
                    <button className="rounded-full m-4 bg-slate-800 text-white px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold">
                    Post
                    </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                {
                  Array.from({length:5}).map((_,i)=>(
                    <div key={i} className="p-4 border-b-[0.5px] broder-gray-600 flex space-x-4 ">
                      <div>
                        <div className="w-10 h-10 bg-slate-600 rounded-full">
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center w-full justify-between">
                          <div className="flex items-center space-x-1 w-full"> 
                            <div className="font-bold">Juan</div>
                            <div className="text-gray-500">@juanuriel</div>
                            <div className="text-gray-500"> <BsDot/> </div>
                            <div className="text-gray-500">10m</div>   
                          </div>
                          <div><BsThreeDots/></div>
                        </div>
                        <div className="text-sm  text-[#060606] my-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti neque iste id odit praesentium blanditiis voluptas dolorem quibusdam illo voluptatem cumque delectus, in eius, esse quam unde assumenda doloremque, mollitia aut quis. Nam ratione, corrupti dolore id, eligendi assumenda voluptas delectus error adipisci, placeat similique nesciunt dolor voluptatum illo.</div>
                        <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl mt-2">

                        </div>
                        <div className="flex items-center justify-start space-x-20 mt-2 w-full">
                          <div className="rounded-full hover:bg-black/20 transition duration-200 p-3 cursor-pointer"><BsChat/></div>
                          <div className="rounded-full hover:bg-black/20 transition duration-200 p-3 cursor-pointer"><PiShareFatLight /></div>
                          <div className="rounded-full hover:bg-black/20 transition duration-200 p-3 cursor-pointer"><CiHeart/></div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </main>
  )
}

export default Center