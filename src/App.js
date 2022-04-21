import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login'
import Checkout from './Checkout'
import Payment from './Payment'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {auth} from './firebase'
import { useEffect, useState } from 'react';
import { useStateValue } from './StateProvider';
import SecondNavbar from './SecondNavbar';
import Footer from './Footer';

function App() {
  const [home_content, setHome_content] = useState(window.innerWidth > 1024);

  window.addEventListener("resize", () => {
    setHome_content(window.innerWidth > 1024);
    console.log(window.innerWidth)
  });

  const [{}, dispatch] = useStateValue()

  useEffect(()=> {
    // if(window.innerWidth < 1024)
    // {
    //   setHome_content = false;
    // } 
     window.addEventListener("resize", () => {
    setHome_content(window.innerWidth > 1024);
    console.log(window.innerWidth)
  });
    
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
        {window.innerWidth > 1024 || home_content ? (
          <>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<>
            <Header/>
            <SecondNavbar/>
            <Home />
            <Footer/></>}
            
            />
            <Route path='/payment' element={
              <>
              <Header/>
              <SecondNavbar/>
              <Payment/>
              <Footer/>
              </>
            }/>
            <Route path="/checkout" element={<><Header/><SecondNavbar/><Checkout/></>}/>
            
  
        </Routes>
        </>
        ): (
          <h1>This website is currently under development and doesn't support
          screens of width less than 768px</h1>
        )}
        
      </div>

    </Router>

    </>
  );
}

export default App;
