import React from 'react'
import {useRouteError} from "react-router-dom"
const ErrorB = () => {
    const error = useRouteError();
    return (
        <div>{error.status}</div>
    )
}

export default ErrorB