import { apiClient } from "../../axios-config";

const addFavouriteCourse = (courseId) => {
    return apiClient.post('user/like-course', {
        "courseId": courseId
    });
}

const UserRepo = {
    addFavouriteCourse: addFavouriteCourse,
}

export { UserRepo }