import { useForm } from "react-hook-form";

function SignIn() {
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
          {...register('password', { required: true, maxLength: 100 })}
          className="bg-zinc-600 w-full text-white px-4 py-2 rounded-md my-2"
          placeholder="Contraseña"
        />
        <button
          type="submit"
          className="border border-white rounded-md p-3"
        >Iniciar Sesion</button>
      </form>
    </div>
  );
}

export default SignIn;