import jwt from 'jwt-decode';
const initialState = {
    isLoggedIn: null,
    isAdmin: null,
    userID: -1,
    jwt: null,
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            // console.log('LOGOUT');
            const { token } = action.payload;
            if (token === false) {
                console.log('token is false', token);
                return {
                    ...state,
                    isLoggedIn: false,
                    isAdmin: false,
                    userID: -2,
                };
            }
            const user = jwt(token.token);
            return {
                ...state,
                isLoggedIn: true,
                jwt: token.token,
                isAdmin: user.auth === 1,
                userID: user.userID,
            };
        case 'LOGOUT':
            console.log('LOGOUT');
            return {
                ...state,
                jwt: null,
                isLoggedIn: false,
                isAdmin: false,
                userID: -1,
            };
        default:
            return state;
    }
};

export default UserReducer;
