import {useEffect, useState, createContext, useContext} from "react";

let logoBlack = '/images/logo/logo-gx-black.svg'
let logoWhite = '/images/logo/logo-gx-white.svg'

const LayoutContext = createContext()

export const useLayoutContext = () => {
    const context = useContext(LayoutContext)
    const [isModeDark, setModeDark] = context.modeDark
    const [imgLogo, setImgLogo] = context.logo
    const [locationId, setLocId] = context.locId

    const _handleDarkMode = (isChecked) => {
        _handleTransitionCheckBox()
        document.documentElement.setAttribute('data-theme', isChecked ? 'dark' : 'light')
        isChecked ? localStorage.setItem('dark-theme', true) : localStorage.removeItem('dark-theme')
        setImgLogo(isChecked ? logoWhite : logoBlack)
        setModeDark(isChecked)
    }

    const _handleTransitionCheckBox = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 1000)
    }

    const _handleSetLoc = (val) => setLocId(val)

    return {
        _handleDarkMode,
        isModeDark: isModeDark,
        imgLogo: imgLogo,
        _handleSetLoc,
        locationId: locationId
    }
}

export const WrappingLayout = ({children}) => {
    const [imgLogo, setImgLogo] = useState(logoBlack)
    const [isModeDark, setModeDark] = useState(false)
    const [locationId, setLocId] = useState('')

    useEffect(() => {
        setLocId(localStorage.getItem('location')||'')
    }, [])

    return (
        <LayoutContext.Provider
            value={{
                modeDark: [isModeDark, setModeDark],
                logo: [imgLogo, setImgLogo],
                locId: [locationId, setLocId]
            }}>
            {children}
        </LayoutContext.Provider>
    )
}