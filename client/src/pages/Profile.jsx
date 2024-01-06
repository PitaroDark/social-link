import CenterProfile from "../components/CenterProfile";
import SideLeftBar from "../components/SideLeftBar";

function Profile() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-white">
        <div className="max-w-screen-xl w-full h-full flex relative">
            <SideLeftBar/>
            <CenterProfile/>
        </div>
    </div>  
  )
}

export default Profile