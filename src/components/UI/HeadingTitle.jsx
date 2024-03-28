import React from 'react'

const HeadingTitle = ({miniTitle, title}) => {
    return (
        <>
            <p
                className="text-center text-indigo-600 text-lg font-medium transition hover:text-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
                {miniTitle}
            </p>
            <h2 className="text-center text-3xl font-bold sm:text-4xl">
                {title}
            </h2>
        </>
    )
}

export default HeadingTitle