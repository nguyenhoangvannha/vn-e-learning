import { coursesData } from './courses-mock-data'
import { DataType } from '../../core/data/data-type'

const allCourse = Array.from(coursesData.keys())

const pathsData = new Map(Array(60).fill(1).map(
    (value, index) => {
        const id = `${Date.now()}${index}`
        return [
            id, {
                id: id,
                image: 'https://picsum.photos/700',
                name: `React Path ${index}`,
                courseIds: allCourse.slice(index, index + 9),
                coursesTime: `1${index}`,
                progress: index,
                introduce: `A ${index} Learning Path is a selection of courses tied together for learners to progress through, mastering a particular subject or program. It allows you to enroll multiple users in multiple courses at once saving you valuable time.`,
                type: DataType.Path,
            }
        ]
    }
))

export default pathsData