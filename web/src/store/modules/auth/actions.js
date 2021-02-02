function signInSuccess (data) {

    return {

        type: '@auth/SIGN-IN_SUCCESS',
        data

    };

}

export { signInSuccess };

function signOut () {

    return {

        type: '@auth/SIGN-OUT',

    };

}

export { signOut };