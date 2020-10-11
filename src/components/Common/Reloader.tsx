import React from "react";
import style from "./Preloader.module.css"

let Preloader  =  () => {
    return(
        <div className={style.preloaderRoller}>
        <div className={style.ldsRoller}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>

    )
}

export default Preloader ;