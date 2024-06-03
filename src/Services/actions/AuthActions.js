import { LogIn, SignUp } from "../api/AuthApi";
import { AUTH_FAIL, AUTH_START, AUTH_SUCCESS } from "../Types";

export const logIn = (formData) => async (dispatch) => {
    dispatch({ type: AUTH_START });
    try {
        const response = await LogIn(formData);
        if (response && response.data) {
            dispatch({ type: AUTH_SUCCESS, data: response.data });
        } else {
            throw new Error("Login failed, no data returned");
        }
    } catch (error) {
        console.log(error);
        dispatch({ type: AUTH_FAIL, error: error.message });
    }
};

export const signUp = (formData) => async (dispatch) => {
    dispatch({ type: AUTH_START });
    try {
        const response = await SignUp(formData);
        if (response && response.data) {
            dispatch({ type: AUTH_SUCCESS, data: response.data });
        } else {
            throw new Error("SignUp failed, no data returned");
        }
    } catch (error) {
        console.log(error);
        dispatch({ type: AUTH_FAIL, error: error.message });
    }
};
