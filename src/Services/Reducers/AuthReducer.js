import { AUTH_FAIL, AUTH_START, AUTH_SUCCESS } from "../Types";

const initialData = {
    loading: false,
    authData: null,
    error: false,
    errorMessage: "",
};

const authReducer = (state = initialData, action) => {
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                loading: true,
                error: false,
                errorMessage: "",
            };
        case AUTH_SUCCESS:
            localStorage.setItem("profile", JSON.stringify(action.data));
            return {
                ...state,
                loading: false,
                authData: action.data,
            };
        case AUTH_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.error,
            };
        default:
            return state;
    }
};

export default authReducer;
