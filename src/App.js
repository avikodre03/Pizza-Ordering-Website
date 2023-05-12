import { Routes, Route } from 'react-router-dom';
import './App.css';
// import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import OderPage from './Components/OrderPage/OderPage';
import PizzaDetails from './Components/PizzaDetails/PizzaDetails';
import OrderSuccess from './Components/OrderSuccess/OrderSuccess';
import MenuPage from './Components/MenuPage/MenuPage';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}

        <Routes>
         
          <Route path="/" element={ <HomePage/>} />
          <Route path="/menupage" element={ <MenuPage/>} />
          <Route path="/addcart" element={ <OderPage/>} />
          <Route path="/quickview" element={ <PizzaDetails/>} />
          <Route path="/delivery" element={ <OrderSuccess/>} />
         
          <Route path="/*" element="404 page not found" />
        </Routes>
    </div>
  );
}

export default App;
