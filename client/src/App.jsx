import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Ladding from "./pages/Ladding.jsx";
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";
import Profile from "./pages/Profile.jsx";
import Chat from "./pages/Chat.jsx";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Ladding />} />
            <Route path="/SocialLink" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/SocialLink/Perfil" element={<Profile />} />
            <Route path="/Chat" element={<Chat />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;