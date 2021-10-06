import React, {useEffect, useState} from "react";
import {animateOpeningIndex} from "../../../animations/animation.utils";

const GXOpening = () => {
    const [isOpening, setIsOpening] = useState(false)

    useEffect( async () => {
        if (!localStorage.getItem('isOpening')) {
            await setIsOpening(true)
            await _handleAnimation()
        }
    }, [])

    const _handleAnimation = () => {
        localStorage.setItem('isOpening', true);
        animateOpeningIndex()
    }

    return (
        <>
            {isOpening ? (
                <div className="opening-gx">
                    <img src="/images/logo/logo-gx-black.svg" className="img-fluid gx-logo" alt="logo GlobalXtreme"/>
                </div>
            ) : null}
        </>
    )
}

export default GXOpening
