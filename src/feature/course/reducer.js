import {
    DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION, SET_STATUS_COURSE_ACTION, SET_ADD_COURSE_ACTION, SET_ADD_TOP_NEW_COURSE_ACTION, SET_ADD_TOP_SELL_COURSE_ACTION, SET_ADD_TOP_RATE_COURSE_ACTION, SET_ADD_RECOMMEND_COURSE_ACTION, SET_ADD_CATEGORY_COURSE_ACTION, SET_COURSE_BY_CATEGORY_COURSE_ACTION,
    SET_SEARCH_RESULTS_COURSE_ACTION,
    SET_FAVOURITES_COURSE_ACTION,
    SET_CURRENT_COURSE_ID_COURSE_ACTION,
    SET_ADD_CONTINUES_LEARNING_ID_COURSE_ACTION,
    SET_ADD_MY_COURSES_COURSE_ACTION,
    SET_CURRENT_VIDEO_MP4_COURSE_ACTION
} from "./actions";

export const courseReducer = (courseState, action) => {
    switch (action.type) {
        case SET_CURRENT_VIDEO_MP4_COURSE_ACTION:
            return {
                ...courseState,
                videoUrl: action.payload.videoUrl
            }
            break;
        case SET_ADD_MY_COURSES_COURSE_ACTION:
            return {
                ...courseState,
                myCourses: action.payload.courses
            }
            break;
        case SET_ADD_CONTINUES_LEARNING_ID_COURSE_ACTION:
            var containt = Object.keys(courseState.courses)
                .includes(action.payload.courseId)
            var newContinuesLearningIds = containt && !courseState.continuesLearningIds.includes(action.payload.courseId)
                ? [...courseState.continuesLearningIds, action.payload.courseId]
                : courseState.continuesLearningIds
            return {
                ...courseState,
                continuesLearningIds: newContinuesLearningIds
            }
            break;
        case SET_CURRENT_COURSE_ID_COURSE_ACTION:
            return {
                ...courseState,
                currentCourseId: action.payload.courseId
            }
            break;
        case SET_FAVOURITES_COURSE_ACTION:
            return {
                ...courseState,
                favouriteCourses: action.payload.courses
            }
            break;
        case SET_SEARCH_RESULTS_COURSE_ACTION:
            return {
                ...courseState,
                searchResults: action.payload.courses
            }
            break;
        case SET_STATUS_COURSE_ACTION:
            const status = { ...courseState.status };

            status[action.payload.statusKey] = action.payload.status;

            return {
                ...courseState,
                status: status,
            }
        case SET_COURSE_BY_CATEGORY_COURSE_ACTION:
            return {
                ...courseState,
                coursesByCategory: {
                    ...courseState.coursesByCategory,
                    ...action.payload.coursesByCategory
                }
            }
            break;
        case SET_ADD_CATEGORY_COURSE_ACTION:
            return {
                ...courseState,
                categories: {
                    ...courseState.categories,
                    ...action.payload.categories
                }
            }
            break;
        case SET_ADD_COURSE_ACTION:
            return {
                ...courseState,
                courses: {
                    ...courseState.courses,
                    ...action.payload.courses
                }
            }
            break;
        case SET_ADD_TOP_NEW_COURSE_ACTION:
            var topNewCourses = [...courseState.topNewCourses, ...action.payload.courseIds]
            return {
                ...courseState,
                topNewCourses: topNewCourses
            }
            break;
        case SET_ADD_TOP_SELL_COURSE_ACTION:
            var topSellCourses = [...courseState.topSellCourses, ...action.payload.courseIds]
            return {
                ...courseState,
                topSellCourses: topSellCourses
            }
            break;
        case SET_ADD_TOP_RATE_COURSE_ACTION:
            var topRateCourses = [...courseState.topRateCourses, ...action.payload.courseIds]
            return {
                ...courseState,
                topRateCourses: topRateCourses
            }
            break;

        case SET_ADD_RECOMMEND_COURSE_ACTION:
            var recommendCourses = [...courseState.recommendCourses, ...action.payload.courseIds]
            return {
                ...courseState,
                recommendCourses: recommendCourses
            }
            break;
        default:
            return courseState;
    }
}