import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignPage from "./pages/SignPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Ladding from "./pages/Ladding.jsx";

function App(){
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Ladding/>} />
            <Route path="/sign" element={<SignPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/user" element={<h1>USER</h1>} />
            <Route path="/post" element={<h1>POST</h1>} />
            <Route path="/comment" element={<h1>COMMENT</h1>} />
            <Route path="/reactions" element={<h1>REACTIONS</h1>} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;