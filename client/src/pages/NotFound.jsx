import React from 'react'

function NotFound() {
  return (
      <div class="w-full bg-white flex flex-col p-40 justify-center items-center">
        <div className='flex h-full'> 
          <p class="font-bold text-[#060606] text-9xl ">404</p>
        </div>
        <div className='flex h-full'>
          <p class=" text-[#060606] text-2xl ">Pagina no encontrada</p>
        </div>
      </div>
  )
}

export default NotFound