import { useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { useNavigate, Link } from 'react-router-dom';


function Register() {
 
    const { register, handleSubmit } = useForm();
    
    return (  
    <div className="w-full h-screen flex items-center justify-center"> 
        <div className='h-full bg-white flex flex-col items-center justify-center'>
            <div className='w-full flex flex-col max-w-[550px] min-w-[400px] border border-black p-4'>
                <div className='w-full flex flex-col '>
                    <h3 className='text-2xl font-semibold'>Registro</h3>
                </div>
                <div>
                <form onSubmit={handleSubmit((values) => { console.log(values);})}> 
                <div className='w-full flex flex-col'>
                    <div className='flex items-center'>
                        <CiUser />
                        <input 
                        type="text" 
                        {...register('username', { required: true, maxLength: 30 })}
                        placeholder='Usuario'
                        className='w-full text-black border-b px-2 py-4 my-4 bg-transparent border-black outline-none focus:outline-none'
                    />
                    </div>
                    <div className='flex items-center'>
                        <CiUser />
                        <input 
                        type="text"
                        {...register('name', { required: true, maxLength: 60 })} 
                        placeholder='Nombre'
                        className='w-full text-black border-b px-2 py-4 my-4 bg-transparent border-black outline-none focus:outline-none'
                    />
                    </div>
                    <div className='flex items-center'>
                        <CiUser />
                        <input 
                        type="text" 
                        {...register('lastname', { required: true, maxLength: 30 })}
                        placeholder='Apellido'
                        className='w-full text-black border-b px-2 py-4 my-4 bg-transparent border-black outline-none focus:outline-none'
                    />
                    </div>
                    <div className='flex items-center'>
                        <MdOutlineMailOutline />
                        <input 
                        type="email" 
                        {...register('email', { required: true, maxLength: 30 })}
                        placeholder='Correo'
                        className='w-full text-black border-b px-2 py-4 my-4 bg-transparent border-black outline-none focus:outline-none'
                    />
                    </div>
                    <div className='flex items-center'>
                        <RiLockPasswordLine />
                        <input 
                            type="password" 
                            {...register('password', { required: true, maxLength: 100 })}
                            placeholder='Contraseña'
                            className='w-full text-black border-b px-2 py-4 my-4 bg-transparent border-black outline-none focus:outline-none'
                        />
                    </div>
                    <div className='flex items-center'>
                        <RiLockPasswordLine />
                        <input 
                        type="password" 
                        {...register('retype-password', { required: true, maxLength: 100 })}
                        placeholder='Confirmar contraseña'
                        className='w-full text-black border-b px-2 py-4 my-4 bg-transparent border-black outline-none focus:outline-none'
                    />
                    </div>
                </div>
                <div className='w-full flex flex-col my-4'>
                    <button type='sumbit' className='w-full my-2 text-white font-semibold bg-[#060606] border-2 border-black rounded-md p-4 text-center flex items-center justify-center'>
                        Registrarse
                    </button>
                </div>
                </form>
                <div className='w-full flex items-center justify-center pt-4'>
                    <p className='text-sm font-normal text-[#060606]'>Ya tienes una cuenta <span  className='font-semibold underline underline-offset-2 cursor-pointer'> <Link to="/">Inicia sesión</Link></span></p >
                </div>
                </div>
            </div>
        </div>  
    </div>    
  )
}

export default Register