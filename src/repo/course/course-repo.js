import { apiClient } from "../axios-config"

import axios from 'axios';

const getTotalNumerCourses = async () => {
    return apiClient.get('course/total-number');
}

export const CourseRepo = {
    getTotalNumerCourses: getTotalNumerCourses,
}