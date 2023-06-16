import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Shop from './Pages/Shop/Shop';
import InventoryPage from './Pages/InventoryPage/InventoryPage';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Reviews from './Pages/Reviews/Reviews';
import PageNotFound from './Pages/Shared/PageNotFound';
import RequireAuth from './Pages/Login/RequireAuth';
import MyInventory from './Pages/Inventory/MyInventory';

function App() {
  return (
    <section className='max-w-8xl mx-auto px-2'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/inventoryPage' element={<InventoryPage></InventoryPage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/myInventory' element={
          <RequireAuth>
            <MyInventory></MyInventory>
          </RequireAuth>}></Route>
        <Route path='/reviews' element={
          <RequireAuth>
            <Reviews></Reviews>
          </RequireAuth>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <ToastContainer />

    </section>
  );
}

export default App;
