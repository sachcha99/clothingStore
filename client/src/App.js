import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Product from "./pages/Product";
import CategoriesList from "./pages/CategoriesList";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import PrivateRoutes from './utils/PrivateRoutes'

import userReducer from "./redux/user";
import SellerDashboard from "./pages/SellerDashboard";
import AddNewProduct from "./pages/AddNewProduct";
import AdminDashboard from "./pages/AdminDashboard";
import ShoppingCart from "./pages/ShoppingCart";
import productReducer from "./redux/product";


const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer
  },
});


function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path='/categories' exact element={<CategoriesList />} />
              <Route path='/sellerDashboard' exact element={<SellerDashboard />} />
              <Route path='/adminDashboard' exact element={<AdminDashboard />} />
              <Route path='/addProduct' exact element={<AddNewProduct />} />
              <Route path='/cart' exact element={<ShoppingCart />} />

            </Route>
            <Route path='/' exact element={<Home />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/register' exact element={<Register />} />
            <Route path='/product/:id' exact element={<Product />} />
            <Route path='/checkout' exact element={<Checkout />} />
            <Route path='/contact' exact element={<ContactUs />} />
            <Route path='/about' exact element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
