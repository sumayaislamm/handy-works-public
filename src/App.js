
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appoimtment from "./Pages/Appointment/Appoimtment";
import Blog from "./Pages/Blog/Blog";
import Login from "./Pages/Forms/Login";
import About from "./Pages/Home/About";
import Footer from "./Pages/Home/Footer";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Banner from "./Pages/Shared/Banner";
import Dashbroad from "./Pages/Shared/Dashbroad";
import Navbar from "./Pages/Shared/Navbar";
import Register from "./Pages/Forms/Register";
import RequireAuth from "./Pages/Forms/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";


function App() {
  
  return (
    <div>
     
      <Navbar></Navbar>
      <Routes>
      
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
         <Route path="/dashbroad" element={<RequireAuth>
           <Dashbroad></Dashbroad>
           </RequireAuth>}></Route>
         <Route path="/purchase" element={<RequireAuth>
           <Purchase></Purchase>
           </RequireAuth>}></Route>
         <Route path="/blog" element={<Blog></Blog>}></Route>
         <Route path="/appointment" element={<Appoimtment></Appoimtment>}></Route>
         <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

