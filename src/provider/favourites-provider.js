import React, { PureComponent, useState } from 'react'

const FavouritesContext = React.createContext()


const FavouritesProvider = (props) => {

    const [favouriteCourses, setFavouriteCourses] = useState(new Set())

    const addFavouriteCourse = (courseId) => {
        console.log('addFavouriteCourse', courseId)
        var newSet = new Set(favouriteCourses.add(courseId))
        setFavouriteCourses(newSet)
    }

    const removeFavouriteCourse = (courseId) => {
        console.log('removeFavouriteCourse', courseId)
        favouriteCourses.delete(courseId)
        var newSet = new Set(favouriteCourses)
        setFavouriteCourses(newSet)
    }

    return (
        <FavouritesContext.Provider
            value={{
                favouriteCourses,
                setFavouriteCourses,
                addFavouriteCourse,
                removeFavouriteCourse
            }}>
            {props.children}
        </FavouritesContext.Provider>
    )
}

export { FavouritesContext, FavouritesProvider }