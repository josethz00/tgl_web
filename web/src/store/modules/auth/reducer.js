import produce from 'immer';


function auth (state = { username: '', signed: false }, action) {

    switch(action.type) {

        case '@auth/SIGN-IN_SUCCESS': {

            return produce(state, draft => {

                const { username, signed } = action.data;
                draft.username = username;
                draft.signed = signed;

            });

        }

        case '@auth/SIGN-OUT': {

            return produce(state, draft => {

                draft.username = '';
                draft.signed = false;

            });
        
        }

        default:

            return state;

    }

}

export default auth;