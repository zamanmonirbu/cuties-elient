import './App.css'
import Auth from './component/page/Auth/Auth'
// import Home from './component/page/Home'
// import Profile from './component/page/Profile/Profile'



function App() {

  return (
    <div className="app">
       <div className="blur" style={{ top:'-18%',right:0 }}>blue</div>
       <div className="blur" style={{ top:'36%',left:'-8rem'}}>blue</div>
        {/* <Home/> */}
        {/* <Profile/> */}
        <Auth/>
    </div>
  )
}

export default App
