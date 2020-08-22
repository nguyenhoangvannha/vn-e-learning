import { apiClient } from "../../axios-config";

const getAllInstructor = (courseId) => {
    return apiClient.get('instructor', {
    });
}

const InstructorRepo = {
    getAllInstructor: getAllInstructor,
}

export { InstructorRepo }