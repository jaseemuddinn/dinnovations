// import * as R from 'ramda';

const appReducer =  (state = {}, action) => {
    switch (action.type) {
        case 'SET_MESSAGE':
            return action.message;
        default:
            return state;
    }
}

export default appReducer;

