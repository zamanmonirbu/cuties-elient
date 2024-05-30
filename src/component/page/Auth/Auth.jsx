import './Auth.css';
import logo from '../../img/logo.png';
import { useState } from 'react';

const Auth = () => {
    const [isSignUp,setIsSignUp]=useState(false);
    
    return (
        //left side
        <div className="auth">
            <div className="a-left">
                <img src={logo} alt="Cute Babies Logo" />
                <div className="web-name">
                    <h1>Cute Babies</h1>
                    <h6>Explore their thoughts</h6>
                </div>
            </div>
            {/* <SignUp /> */}
            {/* <SignIn/> */}
            {/* Right side  */}
            <div className="a-right">
            <form className="infoForm authForm">
                <h3>Sign Up</h3>
                <div>
                    <input type="text" name="firstName" placeholder='Enter First Name' className='infoInput' />
                    <input type="text" name="lastName" placeholder='Enter Last Name' className='infoInput' />
                </div>
                <div>
                    <input type="text" name="userName" placeholder='Enter User Name' className='infoInput'  />
                </div>
                <div>
                    <input type="password" name="password" placeholder='Enter Password' className='infoInput' />
                    <input type="password" name="confirmPassword" placeholder='Enter Confirm Password' className='infoInput' />
                </div>
                <div>
                <span>Already have an account?</span>
                <button className='button sign-in-btn' type='submit'>SignUp</button>
            </div>
            </form>
           
        </div>
        </div>
    );
};


const SignIn = () => {
    return (
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Sign In</h3>
                
                <div>
                    <input type="text" name="userName" placeholder='Enter User Name' className='infoInput'  />
                </div>
                <div>
                    <input type="password" name="password" placeholder='Enter Password' className='infoInput' />
                </div>
                <div>
                <span>Create an account.</span>
                {/* <div></div> */}
                <button className='button sign-in-btn' type='submit'>SignIn</button>
            </div>
            </form>
           
        </div>
    );
};

export default Auth;
