import { useSelector } from 'react-redux';
import './App.css'
import Auth from './component/page/Auth/Auth'
// import Home from './component/page/Home'
// import Profile from './component/page/Profile/Profile'
import {Routes, Route,Navigate } from 'react-router-dom';
import Home from './component/page/Home/Home';


function App() {
  const user=useSelector((state)=>state.authReducer.authData)
  return (
    <div className="app">
       <div className="blur" style={{ top:'-18%',right:0 }}>blue</div>
       <div className="blur" style={{ top:'36%',left:'-8rem'}}>blue</div>
        {/* <Home/> */}
        {/* <Profile/> */}
        {/* <Auth/> */}
        <Routes>
          <Route 
            path='/'  
            element={user? <Navigate to="home"/>:<Navigate to="auth"/>}/>
          <Route 
            path='/home'  
            element={user? <Home/>:<Navigate to="../auth" />}/>
          <Route 
          path='/auth'  
          element={user? <Navigate to="../home" />:<Auth/>}/>
        </Routes>
    </div>
  )
}

export default App
