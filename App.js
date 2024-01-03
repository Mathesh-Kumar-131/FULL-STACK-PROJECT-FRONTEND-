import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Menu from './routes/Menu';
import Cart from './routes/Cart';
import Orders from './routes/Orders';
import Account from './routes/Account';
import LastPage from './routes/LastPage';
import ParticularItem from './components/Cart/ParticularItem';
import { Provider } from 'react-redux';
import store from './components/store';
import { Toaster } from 'react-hot-toast';
import { getTotals } from './components/redux/ShoppingCart';
import { Auth0Provider } from '@auth0/auth0-react';
import { Login } from './login';
import { Register } from './Register';

function App() {

  store.dispatch(getTotals())
  return (
     <div className='App'>
     <Auth0Provider
        domain="dev-oo5zryoy57r15usb.us.auth0.com"
        clientId="hserRkEodNw4qu0BJeAsjCgu5NY9hlDh"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
     <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/orders" element={<Orders />}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/item/:id" element={<ParticularItem/>}/>
          <Route path="/confirm" element={<LastPage/>} />
          <Route path="/LoginPage" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
        </Routes>
        <Toaster position='top-right'/>
      </Provider>
      </Auth0Provider>
     </div>
  );
}

export default App;
