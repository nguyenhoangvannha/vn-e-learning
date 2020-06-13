import { coursesData } from './courses-mock-data';

const courseIds = Array.from(coursesData.keys())

const authorsData = new Map(Array(20).fill(1).map((value, index) => {
    var id = `${index}`;
    const listCourseId = courseIds.slice(index, index + 12);
    return [id, {
        "id": id,
        "name": 'Jesica Nevandar ' + index,
        "avatar": 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        "coursesCount": listCourseId.length,
        "courseIds": listCourseId,
        "introduce": `Jesica Nevandar ${index} started with Airbnb accommodation that was rented 3 years ago. Today I have several and each of them is the best rental option in its city. It means that when a traveler searches Airbnb in my city, my apartment is most likely to be rented before all the others (if available). Basically, I generate the maximum amount of income that can be made with Airbnb in my city for my type of accommodation.`,
    }]
}));

export default authorsData