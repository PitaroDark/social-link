import { GoHome, GoBell } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { TiMessages } from "react-icons/ti";
import { BsThreeDots, BsSearch } from "react-icons/bs";
import { TbSquareRotated, TbDoorExit} from "react-icons/tb";

const SideBarIcons = [
    {
        title:'',
        icon:TbSquareRotated
    },
    {
        title:'Inicio',
        icon:GoHome
    },
    {
        title:'Notificaciónes',
        icon:GoBell
    },
    {
        title:'Mensajes',
        icon:TiMessages
    },
    {
        title:'Perfil',
        icon:BiUser
    },
];

const SideLeftBar = () => {
  return (
    <section className="w-[20%] sticky top-0 xl:flex flex-col items-stretch h-screen hidden"> 
        <div className="flex flex-col items-stretch h-full space-y-4 mt-4"> 
        {SideBarIcons.map((item)=>(
                <Link className="hover:bg-black/20 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6" href={`/${item.title.toLowerCase()}`} key={item.title}>
                <div> <item.icon/> </div>
                <div> {item.title} </div>
                </Link>
            ))}
             <div>
                <div className="relative left-3 w-[90%] h-full">
                    <input
                        id="searchBox"
                        type="text"
                        placeholder="Buscar"
                        className="outline-none peer focus:border-primary focus:border border-black bg-white w-full h-full rounded-xl py-4 pl-14 pr-4"
                    />
                    <label
                        htmlFor="searchBox"
                        className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-slate-950 peer-focus:text-black"
                    >
                        <BsSearch className="w-5 h-5" />
                    </label>
                </div>
            </div>
        </div>
        <div>
            
        </div>
        <button className="rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-black/20 transition duration-200 w-full justify-between">
            <div className="flex items-center space-x-2">
                <div className="rounded-full bg-slate-600 w-10 h-10"> </div>
                <div className="text-left text-sm"> 
                    <div className="font-semibold">Juan</div>
                    <div>@juanuriel</div>
                </div>
            </div>
            <div className="items-center">
                <TbDoorExit />
            </div>
        </button>
    </section>
  )
}

export default SideLeftBar;