const CourseType = {
    SOFTWARE_DEVELOPMENT: 'SOFTWARE_DEVELOPMENT',
    IT_OPERATIONS: "IT_OPERATIONS",
    SECURITY_PROFESSIONAL: "SECURITY_PROFESSIONAL",
    DATA_PROFESSIONAL: "DATA_PROFESSIONAL",
    OTHER: 'OTHER',
}


const mockCourseType = (index) => {
    if (index % 5 == 0) {
        return CourseType.SECURITY_PROFESSIONAL;
    }

    if (index % 2 == 0) {
        return CourseType.SOFTWARE_DEVELOPMENT;
    }
    if (index % 3 == 0) {
        return CourseType.IT_OPERATIONS;
    }
    
    return CourseType.DATA_PROFESSIONAL;
}

const coursesData = new Map(Array(204).fill(1).map((value, index) => {
    var id = `${Date.now()}${index}`;
    return [id, {
        "id": id,
        "date": Date.now(),
        "image": "https://picsum.photos/700",
        "length": "3h 4m",
        "level": "Intermediate",
        "name": `Angular Fundamentals  ${index}`,
        "rating": 4.4,
        "ratingCount": 3 + index,
        "teachers": "Joe Eames, +4",
        "type": mockCourseType(index),
    }]
}));

const newCourses = Array.from(coursesData.keys()).slice(0, 20);

const recommendedCourses = Array.from(coursesData.keys()).slice(30, 50);

export { CourseType, coursesData, newCourses, recommendedCourses }