import "./App.css";
import Sidebar from "./Components/Leftside/Sidebar";
import Maindash from "./Components/Maindash/Maindash";
import Right from "./Components/Rightside/Right";
// import Dashboard from "./Components/Dashboard/Dashboard";
import Orders from "./Components/Orders/Orders";
import Products from "./Components/Products/Products";
import Customers from "./Components/Customers/Customers";
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        < Sidebar />
        <Maindash />
        <Right />
{/* <BrowserRouter> */}
        <Routes>
          <Route path="/Orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
        {/* </BrowserRouter> */}
      </div>



    </div>
  );
}

export default App;
