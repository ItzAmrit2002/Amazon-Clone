import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login'
import Checkout from './Checkout'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {auth} from './firebase'
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';

function App() {

  const [{}, dispatch] = useStateValue()

  useEffect(()=> {
      auth.onAuthStateChanged(authUser => {
        console.log('USER -> ', authUser)

        if(authUser) {
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        }
        else{

          dispatch({
            type: 'SET_USER',
            user: null
          })

        }
      })
  }, [])
  return (
    <>
    <Router>
      <div className="app">
        
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<>
          <Header/>
          <Home /></>}/>
          <Route path="/checkout" element={<><Header/><Checkout/></>}/>
          

      </Routes>

      </div>

    </Router>

    </>
  );
}

export default App;
