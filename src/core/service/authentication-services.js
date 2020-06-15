export const login = (username, password) => {
    if (username === 'admin' && password == '123456') {
        return {
            status: 200,
            user: {
                username: username,
                token: 'empty',
                fullName: 'Administrator'
            }
        };
    } else {
        return { status: 404 };
    }
}

export const register = (email, username, password, fullName, phone) => {
    if (username != '' && password != '') {
        return {
            status: 200,
            user: {
                email: email,
                username: username,
                password: password,
                fullName: fullName,
                phone: phone,
                token: 'empty',
            }
        };
    } else {
        return { status: 404 };
    }
}