import React from 'react'
import style from "./play.module.css"
const Play = () => {
    return (
        <div className={style.balls}>
            <div style={{ backgroundColor: "#d4bb93" }} />
            <div style={{ backgroundColor: "#152425" }} />
            <div style={{ backgroundColor: "#046169" }} />
        </div>
    )
}

export default Play