export const DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION = 'DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION'
export const SET_STATUS_COURSE_ACTION = 'SET_STATUS_COURSE_ACTION'
export const DO_GET_TOP_NEW_COURSE_ACTION = 'DO_GET_TOP_NEW_COURSE_ACTION'
export const DO_GET_TOP_SELL_COURSE_ACTION = 'DO_GET_TOP_SELL_COURSE_ACTION'
export const DO_GET_TOP_RATE_COURSE_ACTION = 'DO_GET_TOP_RATE_COURSE_ACTION'
export const SET_ADD_COURSE_ACTION = 'SET_ADD_COURSE_ACTION'
export const SET_ADD_TOP_NEW_COURSE_ACTION = 'SET_ADD_TOP_NEW_COURSE_ACTION'
export const SET_ADD_TOP_SELL_COURSE_ACTION = 'SET_ADD_TOP_SELL_COURSE_ACTION'
export const SET_ADD_TOP_RATE_COURSE_ACTION = 'SET_ADD_TOP_RATE_COURSE_ACTION'
export const DO_GET_COURSE_DETAIL_COURSE_ACTION = 'DO_GET_COURSE_DETAIL_COURSE_ACTION'
export const DO_GET_RECOMMEND_COURSE_COURSE_ACTION = 'DO_GET_RECOMMEND_COURSE_COURSE_ACTION'
export const SET_ADD_RECOMMEND_COURSE_ACTION = 'SET_ADD_RECOMMEND_COURSE_ACTION'
export const DO_GET_ALL_CATEGORY_COURSE_ACTION = 'DO_GET_ALL_CATEGORY_COURSE_ACTION'
export const SET_ADD_CATEGORY_COURSE_ACTION = 'SET_ADD_CATEGORY_COURSE_ACTION'
export const DO_GET_COURSE_BY_CATEGORY_COURSE_ACTION = 'DO_GET_COURSE_BY_CATEGORY_COURSE_ACTION'
export const SET_COURSE_BY_CATEGORY_COURSE_ACTION = 'SET_COURSE_BY_CATEGORY_COURSE_ACTION'
export const DO_SEARCH_COURSE_COURSE_ACTION = 'DO_SEARCH_COURSE_COURSE_ACTION'
export const SET_SEARCH_RESULTS_COURSE_ACTION = 'SET_SEARCH_RESULTS_COURSE_ACTION'
export const DO_GET_FAVOURITES_COURSE_ACTION = 'DO_GET_FAVOURITES_COURSE_ACTION'
export const SET_FAVOURITES_COURSE_ACTION = 'SET_FAVOURITES_COURSE_ACTION'
export const SET_CURRENT_COURSE_ID_COURSE_ACTION = 'SET_CURRENT_COURSE_ID_COURSE_ACTION'
export const SET_ADD_CONTINUES_LEARNING_ID_COURSE_ACTION = 'SET_ADD_CONTINUES_LEARNING_ID_COURSE_ACTION'
export const DO_GET_FREE_COURSE_COURSE_ACTION = 'DO_GET_FREE_COURSE_COURSE_ACTION'
export const DO_GET_MY_COURSES_COURSE_COURSE_ACTION = 'DO_GET_MY_COURSES_COURSE_COURSE_ACTION'
export const SET_ADD_MY_COURSES_COURSE_ACTION = 'SET_ADD_MY_COURSES_COURSE_ACTION'
export const DO_GET_COURSE_LESSON_VIDEO_COURSE_ACTION = 'DO_GET_COURSE_LESSON_VIDEO_COURSE_ACTION'
export const SET_CURRENT_VIDEO_MP4_COURSE_ACTION = 'SET_CURRENT_VIDEO_MP4_COURSE_ACTION'

export const SetCurrentVideoMp4CourseAction = (videoUrl) => {
    return {
        type: SET_CURRENT_VIDEO_MP4_COURSE_ACTION,
        payload: {
            videoUrl: videoUrl
        }
    }
}

export const DoGetCourseLessonVideoCourseAction = (courseId, lessonId) => {
    return {
        type: DO_GET_COURSE_LESSON_VIDEO_COURSE_ACTION,
        payload: {
            courseId: courseId,
            lessonId: lessonId,
        }
    }
}


export const SetAddMyCoursesCourseAction = (courses) => {
    return {
        type: SET_ADD_MY_COURSES_COURSE_ACTION,
        payload: {
            courses: courses
        }
    }
}

export const DoGetMyCoursesCourseAction = () => {
    return {
        type: DO_GET_MY_COURSES_COURSE_COURSE_ACTION,
        payload: {
        }
    }
}

export const DoGetFreeCourseCourseAction = (courseId) => {
    return {
        type: DO_GET_FREE_COURSE_COURSE_ACTION,
        payload: {
            courseId: courseId
        }
    }
}

export const SetAddContinuesLearningCourseAction = (courseId) => {
    return {
        type: SET_ADD_CONTINUES_LEARNING_ID_COURSE_ACTION,
        payload: {
            courseId: courseId
        }
    }
}

export const SetCurrentCourseIdCourseAction = (courseId) => {
    return {
        type: SET_CURRENT_COURSE_ID_COURSE_ACTION,
        payload: {
            courseId: courseId
        }
    }
}

export const DoGetFavouritesCourseAction = () => {
    return {
        type: DO_GET_FAVOURITES_COURSE_ACTION,
        payload: {
        }
    }
}

export const SetFavouritesCourseAction = (courses) => {
    return {
        type: SET_FAVOURITES_COURSE_ACTION,
        payload: {
            courses: courses
        }
    }
}

export const DoSearchCourseCourseAction = (keyword) => {
    return {
        type: DO_SEARCH_COURSE_COURSE_ACTION,
        payload: {
            keyword: keyword
        }
    }
}

export const SetSearchResultCourseAction = (courses) => {
    return {
        type: SET_SEARCH_RESULTS_COURSE_ACTION,
        payload: {
            courses: courses
        }
    }
}

export const DoGetCourseByCategoryCourseAction = (category) => {
    return {
        type: DO_GET_COURSE_BY_CATEGORY_COURSE_ACTION,
        payload: {
            category: category
        }
    }
}

export const SetCourseByCategoryCourseAction = (coursesByCategory) => {
    return {
        type: SET_COURSE_BY_CATEGORY_COURSE_ACTION,
        payload: {
            coursesByCategory: coursesByCategory
        }
    }
}

export const DoGetAllCategoryCourseAction = () => {
    return {
        type: DO_GET_ALL_CATEGORY_COURSE_ACTION,
        payload: {
        }
    }
}

export const SetAddCategoriesCourseAction = (categories) => {
    return {
        type: SET_ADD_CATEGORY_COURSE_ACTION,
        payload: {
            categories: categories
        }
    }
}

export const DoGetRecommendCourseCourseAction = (userId, limit, offset) => {
    return {
        type: DO_GET_RECOMMEND_COURSE_COURSE_ACTION,
        payload: {
            userId: userId,
            limit: limit ?? 5,
            offset: offset ?? 1
        }
    }
}

export const SetAddRecommendCourseAction = (courseIds) => {
    return {
        type: SET_ADD_RECOMMEND_COURSE_ACTION,
        payload: {
            courseIds: courseIds
        }
    }
}

const DoGetTotalNumerCoursesCourseAction = () => {
    return {
        type: DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION,
        payload: {
        }
    }
}

const DoGetTopNewCourseAction = () => {
    return {
        type: DO_GET_TOP_NEW_COURSE_ACTION,
        payload: {

        }
    }
}

const DoGetTopSellCourseAction = () => {
    return {
        type: DO_GET_TOP_SELL_COURSE_ACTION,
        payload: {

        }
    }
}

const DoGetTopRateCourseAction = () => {
    return {
        type: DO_GET_TOP_RATE_COURSE_ACTION,
        payload: {

        }
    }
}

const SetAddCourseAction = (courses) => {
    return {
        type: SET_ADD_COURSE_ACTION,
        payload: {
            courses: courses
        }
    }
}

const SetAddTopNewCourseAction = (courseIds) => {
    return {
        type: SET_ADD_TOP_NEW_COURSE_ACTION,
        payload: {
            courseIds: courseIds
        }
    }
}

const SetAddTopSellCourseAction = (courseIds) => {
    return {
        type: SET_ADD_TOP_SELL_COURSE_ACTION,
        payload: {
            courseIds: courseIds
        }
    }
}

const SetAddTopRateCourseAction = (courseIds) => {
    return {
        type: SET_ADD_TOP_RATE_COURSE_ACTION,
        payload: {
            courseIds: courseIds
        }
    }
}

const SetStatusCourseAction = (statusKey, status) => {
    return {
        type: SET_STATUS_COURSE_ACTION,
        payload: {
            statusKey: statusKey,
            status: status,
        }
    }
}

export const DoGetCourseDetailCourseAction = (courseId, userId) => {
    return {
        type: DO_GET_COURSE_DETAIL_COURSE_ACTION,
        payload: {
            courseId: courseId,
            userId: userId,
        }
    }
}

export {
    DoGetTotalNumerCoursesCourseAction,
    SetStatusCourseAction,
    DoGetTopNewCourseAction,
    SetAddCourseAction,
    SetAddTopNewCourseAction,
    DoGetTopSellCourseAction,
    SetAddTopSellCourseAction,
    DoGetTopRateCourseAction,
    SetAddTopRateCourseAction,
}