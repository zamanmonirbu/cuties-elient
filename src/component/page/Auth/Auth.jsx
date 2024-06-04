import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from '../../../Services/actions/AuthActions';
import logo from '../../img/logo.png';
import './Auth.css';

const Auth = () => {
    const dispatch = useDispatch();
    const {loading}=useSelector((state)=>state.authReducer);
    const [isSignUp, setIsSignUp] = useState(true);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        confirmPassword: ""
    });

    const [confirm, setConfirm] = useState(true);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            if (data.password === data.confirmPassword) {
                dispatch(signUp(data)).catch((error) => {
                    console.error("Signup failed:", error);
                });
            } else {
                setConfirm(false);
            }
        } else {
            dispatch(logIn(data)).catch((error) => {
                console.error("Login failed:", error);
            });
        }
    };

    const resetForm = () => {
        setConfirm(true);
        setData({
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            confirmPassword: ""
        });
    };

    return (
        <div className="auth">
            <div className="a-left">
                <img src={logo} alt="Cute Babies Logo" />
                <div className="web-name">
                    <h1>Cute Babies</h1>
                    <h6>Explore their thoughts</h6>
                </div>
            </div>
            <div className="a-right">
                <form className="infoForm authForm" onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Sign Up" : "Login"}</h3>
                    {isSignUp && (
                        <div>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Enter First Name"
                                className="infoInput"
                                onChange={handleChange}
                                value={data.firstName}
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Enter Last Name"
                                className="infoInput"
                                onChange={handleChange}
                                value={data.lastName}
                            />
                        </div>
                    )}
                    <div>
                        <input
                            type="text"
                            name="userName"
                            placeholder="Enter User Name"
                            className="infoInput"
                            onChange={handleChange}
                            value={data.userName}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            className="infoInput"
                            onChange={handleChange}
                            value={data.password}
                        />
                        {isSignUp && (
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Enter Confirm Password"
                                className="infoInput"
                                onChange={handleChange}
                                value={data.confirmPassword}
                            />
                        )}
                    </div>
                    <span style={{ color: "red", display: confirm ? "none" : "block" }}>
                        *Confirm passwords do not match
                    </span>
                    <div>
                        <span
                            style={{ marginLeft: "20px", cursor: "pointer" }}
                            onClick={() => {
                                setIsSignUp((prev) => !prev);
                                resetForm();
                            }}
                        >
                            {isSignUp ? "Already have an account?" : "Create an account"}
                        </span>
                        <button className="button sign-in-btn" type="submit">
                            {isSignUp ? "Sign Up" : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;
