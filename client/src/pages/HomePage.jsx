import Center from "../components/Center";
import SideLeftBar from "../components/SideLeftBar";

const HomePage  = () =>{
    return(
      <div className="w-full h-full flex justify-center items-center relative bg-white">
        <div className="max-w-screen-xl w-full h-full flex relative">
            <SideLeftBar/>
            <Center/>
        </div>
      </div>  
    );
};

export default HomePage;