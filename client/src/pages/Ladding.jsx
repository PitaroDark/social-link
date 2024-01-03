import React, { useState } from 'react'
import back from '../assets/redes-sociales.svg'

function Ladding() {

  return (
    <div className="w-full h-screen flex items-start">
        <div className="relative w-1/2 h-full flex flex-col">
            <div className='absolute top-[3%] left-[10%] flex flex-col'>
                <h1 className='text-4xl font-bold my-4 '>Social Link</h1>
                <p className='text-xl font-normal'>Comparte lo que piensas!</p>
            </div>
            <img src={back} className="w-full h-full"/>
        </div>
        <div className='w-1/2 h-full bg-white flex flex-col pt-60 pl-40 justify-between'>
            <div className='w-full flex flex-col max-w-[550px] border border-black p-4'>
                <div className='w-full flex flex-col mb-2 '>
                    <h3 className='text-2xl font-semibold mb-2'>Iniciar Sesion</h3>
                    <p className='text-base mb-2'>Bienvenido de regreso! Introduce tus datos</p>
                </div>
                <div className='w-full flex flex-col'>
                    <input 
                        type="email" 
                        placeholder='Email'
                        className='w-full text-black border-b py-4 my-4 bg-transparent border-black outline-none focus:outline-none'
                    />
                    <input 
                        type="password" 
                        placeholder='password'
                        className='w-full text-black border-b py-4 my-4 bg-transparent border-black outline-none focus:outline-none'
                    />
                </div>
                <div className='w-full flex justify-between'>
                    <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>¿Olvidaste tu contraseña?</p>
                </div>
                <div className='w-full flex flex-col my-4'>
                    <button className='w-full my-2 text-white font-semibold bg-[#060606] border-2 border-black rounded-md p-4 text-center flex items-center justify-center'>
                        Iniciar Sesion
                    </button>
                    <button className='w-full my-2 text-[#060606] font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center'>
                        Registrarse
                    </button>
                </div>
                <div className='w-full h-[1px] bg-black'>
                    
                </div>
                <div className='w-full flex items-center justify-center pt-4'>
                    <p className='text-sm font-normal text-[#060606]'>¿No tienes una cuenta? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Registrare gratis</span></p >
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ladding