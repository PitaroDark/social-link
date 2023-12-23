import { useForm } from "react-hook-form";

function SignUp() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="bg-zinc-700 max-w-md p-10 rounded-md justify-self-center" >
      <form onSubmit={handleSubmit((values) => {
        console.log(values);
      })}>
        <input
          type="text"
          {...register('username', { required: true, maxLength: 30 })}
          className="bg-zinc-600 w-full text-white px-4 py-2 rounded-md my-2"
          placeholder="Nombre de usuario"
        />
        <input
          type="text"
          {...register('name', { required: true, maxLength: 60 })}
          className="bg-zinc-600 w-full text-white px-4 py-2 rounded-md my-2"
          placeholder="Nombre(s)"
        />
        <input
          type="text"
          {...register('lastname', { required: true, maxLength: 30 })}
          className="bg-zinc-600 w-full text-white px-4 py-2 rounded-md my-2"
          placeholder="Apellido(s)"
        />
        <input
          type="text"
          {...register('email', { required: true, maxLength: 30 })}
          className="bg-zinc-600 w-full text-white px-4 py-2 rounded-md my-2"
          placeholder="Correo electronico"
        />
        <input
          type="text"
          {...register('password', { required: true, maxLength: 100 })}
          className="bg-zinc-600 w-full text-white px-4 py-2 rounded-md my-2"
          placeholder="Contraseña"
        />
        <input
          type="text"
          {...register('retype-password', { required: true, maxLength: 100 })}
          className="bg-zinc-600 w-full text-white px-4 py-2 rounded-md my-2"
          placeholder="Confirma tu contraseña"
        />
        <button
          type="submit"
          className="border border-white rounded-md p-3"
        >Registrate</button>
      </form>
    </div>
  );
}

export default SignUp