import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Destination from './Pages/Destination/Destination';
import Experience from './Pages/Experience/Experience';
import Themes from './Pages/Themes/Themes';
import Incredeble_Journey from './Pages/Incredeble_Journey/Incredeble_Journey'
import NestAgra_pg from './Pages/Destination/Nested/NestAgra_pg';
import NestAjmer_pg from './Pages/Destination/Nested/NestAjmer_pg';
import NestAmritsar_pg from './Pages/Destination/Nested/NestAmritsar_pg';
import NestAndman_pg from './Pages/Destination/Nested/NestAndman_pg';
import NestBandhavgarg_pg from './Pages/Destination/Nested/NestBandhavgarh_pg';
import NestDarjelling_pg from './Pages/Destination/Nested/NestDarjelling_pg';
import NestDharamshala_pg from './Pages/Destination/Nested/NestDharamshala_pg';
import NestGoa_pg from './Pages/Destination/Nested/NestGoa_pg';
import NestJaipur_pg from './Pages/Destination/Nested/NestJaipur_pg';
import NestJodhpur_pg from './Pages/Destination/Nested/NestJodhpur_pg';
import NestJammuKashmir_pg from './Pages/Destination/Nested/NestJammuKashmir_pg';
import NestManali_pg from './Pages/Destination/Nested/NestManali_pg';
import NestShimla_pg from './Pages/Destination/Nested/NestShimla_pg';
import NestRelegious_pg from './Pages/Destination/Nested/NestRelegious_pg';
import Navbar from './Component/Home_Pg/Navbar/Navbar';
import Nepal from './Pages/Discover_More/MorePages/Nepal';
import Srilanka from './Pages/Discover_More/MorePages/Srilanka';
import Maldives from './Pages/Discover_More/MorePages/Maldives';
import BookHoliday from './Pages/BookHoliday/BookHoliday';
import NestKerla_pg from './Pages/Destination/Nested/NestKerla_pg';
import NestJim_Corbett from './Pages/Destination/Nested/NestJim_Corbett';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/destinations' element={<Destination></Destination>}></Route>
          <Route path='/experiences' element={<Experience></Experience>}></Route>
          <Route path='/themes' element={<Themes></Themes>}> </Route>
          <Route path='/incredeble_Journey' element={<Incredeble_Journey></Incredeble_Journey>}></Route>
          <Route path='/book_holiday' element={<BookHoliday></BookHoliday>}></Route>
          <Route path='/NestAagra' element={<NestAgra_pg></NestAgra_pg>}></Route>
          <Route path='/NestAjmer' element={<NestAjmer_pg></NestAjmer_pg>}></Route>
          <Route path='/NestAmritsar' element={<NestAmritsar_pg></NestAmritsar_pg>}></Route>
          <Route path='/NestAndman' element={<NestAndman_pg></NestAndman_pg>}></Route>
          <Route path='/NestBandhavgarh' element={<NestBandhavgarg_pg></NestBandhavgarg_pg>}></Route>
          <Route path='/NestDarjelling' element={<NestDarjelling_pg></NestDarjelling_pg>}></Route>
          <Route path='/NestDharamshala' element={<NestDharamshala_pg></NestDharamshala_pg>}></Route>
          <Route path='/NestGoa' element={<NestGoa_pg></NestGoa_pg>}></Route>
          <Route path='/NestJaipur' element={<NestJaipur_pg></NestJaipur_pg>}></Route>
          <Route path='/NestJodhpur' element={<NestJodhpur_pg></NestJodhpur_pg>}></Route>
          <Route path='/NestManali' element={<NestManali_pg></NestManali_pg>}></Route>
          <Route path='/NestShimla' element={<NestShimla_pg></NestShimla_pg>}></Route>
          <Route path='/NestJammuKashmir' element={<NestJammuKashmir_pg></NestJammuKashmir_pg>}></Route>


          <Route path='/NestKerla' element={<NestKerla_pg></NestKerla_pg>}></Route>
          <Route path='/NestJimCorbett' element={<NestJim_Corbett></NestJim_Corbett>}></Route>

          <Route path='/NestRelegious' element={<NestRelegious_pg></NestRelegious_pg>}></Route>
          <Route path='/nepal' element={<Nepal></Nepal>}></Route>
          <Route path='/srilanka' element={<Srilanka></Srilanka>}></Route>
          <Route path='/maldives' element={<Maldives></Maldives>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
