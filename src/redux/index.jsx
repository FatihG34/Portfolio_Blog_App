
const initialState = {
    auth: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'value':
            return { auth: state.auth };
        case 'value':
            return { auth: state.auth };

        default:
           return state
    }

};


// reducer in ana yapısı iskeleti bu şekilde 👆🏻