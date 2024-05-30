import './LogoSearch.css'
import logo from '../img/logo.png';
import { CiSearch } from "react-icons/ci";

const LogoSearch = () => {
    return (
        <div className='logoSearch'>
            <img src={logo} alt="logo" />
            <div className="search">
                <input type="text" placeholder='Explore'/>
                <div className="s-search">
                   <CiSearch/>
                </div>
            </div>
        </div>
    );
};

export default LogoSearch;