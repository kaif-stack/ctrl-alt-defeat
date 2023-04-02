import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../src/Pages/Home"
import Register from "../src/Pages/Register"
import RegisterBusiness from "../src/Pages/RegisterBusiness"
import UserLocation from './Pages/UserLocation';
// import NearestBusiness from "../src/Pages/NearestBusinesses"



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/registerBusiness' element={<RegisterBusiness/>} />
        <Route path='/location' element={<UserLocation/>} />
        {/* <Route path='/service' element={<NearestBusiness/>} /> */}
      </Routes>
    </div>
  );
};

export default App;