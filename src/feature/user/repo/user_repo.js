import { apiClient } from "../../axios-config";

const addFavouriteCourse = (courseId) => {
    return apiClient.post('user/like-course', {
        "courseId": courseId
    });
}

const updateBasicProfile = (username, phone, avatar) => {
    return apiClient.put('user/update-profile', {
        "name": username,
        "avatar": avatar,
        "phone": phone
    });
}

const changePassword = (userId, oldPass, newPass) => {
    return apiClient.post('user​/change-password', {
        "id": userId,
        "oldPass": oldPass,
        "newPass": newPass
    });
}

const UserRepo = {
    addFavouriteCourse: addFavouriteCourse,
    updateBasicProfile: updateBasicProfile,
    changePassword: changePassword,
}

export { UserRepo }