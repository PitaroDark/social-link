import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import Ladding from "./pages/Ladding.jsx";
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";

function App(){
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Ladding/>} />
            <Route path="/SocialLink" element={<HomePage />} />
            <Route path="/register" element={<Register />}/>
            <Route path="*" element={<NotFound/>} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;