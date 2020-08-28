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

const UserRepo = {
    addFavouriteCourse: addFavouriteCourse,
    updateBasicProfile: updateBasicProfile,
}

export { UserRepo }