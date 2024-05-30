import React, { useEffect } from 'react'
import "./preloader.css"
import { preLoaderAnim } from '../animations'
const PreLoader = () =>
{

    useEffect(() =>
    {
        preLoaderAnim()
    }, [])
    return (
        <div className="preloader">
            <div className="texts-container">
                <span>RATE</span>
                <span>YOUR</span>
                <span>TEACHER</span>
            </div>
        </div>
    )
}

export default PreLoader