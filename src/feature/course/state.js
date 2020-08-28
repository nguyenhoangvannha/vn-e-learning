import {
    DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION, DO_GET_TOP_NEW_COURSE_ACTION,
    DO_SEARCH_COURSE_COURSE_ACTION,
    DO_GET_FAVOURITES_COURSE_ACTION
} from "./actions"
import { Status } from '../../core/status'

export const courseState = () => {
    return {
        totalNumerCourses: 0,
        status: {
            DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION: Status.idle(),
            DO_GET_TOP_NEW_COURSE_ACTION: Status.idle(),
            DO_SEARCH_COURSE_COURSE_ACTION: Status.idle(),
            DO_GET_FAVOURITES_COURSE_ACTION: Status.idle(),
        },
        courses: {},
        topNewCourses: [],
        topSellCourses: [],
        topRateCourses: [],
        recommendCourses: [],
        categories: {},
        coursesByCategory: {}, //String - Array Id
        searchResults: [],
        favouriteCourses: [],
        currentCourseId: '',
        continuesLearningIds: [],
        myCourses: {

        }
    }
}