import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import LendRequest from "./pages/LendRequest";
import Inventory from "./pages/Inventory";
import Addnewdrug from "./pages/Addnewdrug";
import UpdateDrug from "./pages/UpdateDrug";


export default function App() {
  return (
    <BrowserRouter>
    <Layout/>
      <Routes>
        
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="lendrequest" element={<LendRequest />} />
          <Route path="*" element={<NoPage />} />
          <Route path="Addnewdrug" element={<Addnewdrug />} />
          <Route path="UpdateDrug" element={<UpdateDrug />} />
        
      </Routes>
      
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);