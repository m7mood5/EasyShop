import React from 'react'
import style from "./container.module.css"
const Mcon = ({ children }) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    );
};

export default Mcon