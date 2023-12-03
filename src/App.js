import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import Signup from './pages/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './pages/MyOrder';


function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Login' element={<Login />} />
            <Route exact path='/Signup' element={<Signup />} />
            <Route exact path='/myOrder' element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
