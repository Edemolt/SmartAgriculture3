import {Route, Routes} from 'react-router-dom';


import Home from './routes/Home_page/home.component';
// import Nav from './routes/Navigation/nav.component';
// import Base from './components/Home/home.component'; 
import Bookings from './routes/Bookings/bookings.component';
import Crops from './routes/Crops/crops.component';

import Pricing from './routes/Pricings/pricing.component';
import './App.css';


const App = () => {
  
  return(
    // <Routes>
    //   <Route path='/' element={<Nav/>}>
    //     <Route index element={<Home/>}/>
    //     {/* <Route path= '/shop' element={<Shop/>}/> */}
    //   </Route>
    //   <Route path='/shop' element={<Shop/>}/>

    // </Routes>
    <Routes>
      <Route path='/' element={<Home/>}>
      </Route>
        <Route path='bookings/' element={<Bookings/>}>
          <Route path='crops' element={<Crops/>}/>
          <Route path='time/' element={<Crops/>}/>
          <Route path='price/' element={<Crops/>}/>
        </Route>
        <Route path='pricings/' element={<Pricing/>}/>
    </Routes>
  ) 
}

export default App;