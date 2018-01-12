const initialState = {
    user: null,
    pageTitle: 'Dashboard'
}

const LOGIN = 'LOGIN';
const UPDATE_PAGE_TITLE = 'UPDATE_PAGE_TITLE';

//reducer
export default function ( state = initialState, action ) {
    const { type, payload } = action;

    switch ( type ) {
        case LOGIN:
            return { ...state, user: payload };
        case UPDATE_PAGE_TITLE:
            return { ...state, pageTitle: payload };
        default:
            return state;
    }
}

export const login = ( user ) => {
    return {
        type: 'LOGIN',
        payload: user
    }
}

export const updatePageTitle = ( pageTitle ) => {
    return {
        type: 'UPDATE_PAGE_TITLE',
        payload: pageTitle
    }
}