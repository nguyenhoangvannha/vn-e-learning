import { DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION } from "./actions"
import {Status} from '../../core/status'

export const courseState = () => {
    return {
        totalNumerCourses: 0,
        status: {
            DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION: Status.idle(),
        }
    }
}