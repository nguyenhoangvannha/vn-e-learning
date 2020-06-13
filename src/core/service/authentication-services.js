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