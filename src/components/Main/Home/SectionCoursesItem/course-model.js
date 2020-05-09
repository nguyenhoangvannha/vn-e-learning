class CourseModel {
    constructor(id, image, name, teachers, level, date, length, rating, ratingCount) {
        this.id = id
        this.name = name
        this.image = image
        this.teachers = teachers
        this.level = level
        this.date = date
        this.length = length
        this.rating = rating
        this.ratingCount = ratingCount
    }
}

export default CourseModel
