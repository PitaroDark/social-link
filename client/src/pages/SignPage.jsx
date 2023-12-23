import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
import Loading from "./Loading.jsx";
import { useForm } from "react-hook-form";

function SignPage() {

  const { register, handleSubmit } = useForm();

  return (
    <div className="h-screen flex items-center justify-center">
      <Loading />
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignPage;