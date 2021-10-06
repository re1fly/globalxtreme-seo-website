import {useEffect, useState} from "react";
import {getLocations} from '../config/locations'
import {useLayoutContext} from './MainContext'
import ReactSelect from 'react-select'


export const ChooseLocation = () => {
    const {locationId, _handleSetLoc} = useLayoutContext()
    const _handleChoose = (event) => {
        _handleSetLoc(event.target.value)
        localStorage.setItem('location', event.target.value)
    }

    return (
        <>
            <div className="input-group">
                <select className="custom-select"
                        onChange={(e) => _handleChoose(e)}
                        value={locationId}>
                    <option disabled>Choose</option>
                    {getLocations.map((gl, index) => {

                        if (gl.isGroup) {
                            return (
                                <optgroup label={gl.groupName} key={'group-' + index}>
                                    {gl.locations.map((lc, indexLC) => (
                                        <option value={lc.id} key={indexLC + gl.groupName}>{lc.name}</option>
                                    ))}
                                </optgroup>
                            )
                        }
                        {
                            return (
                                <option value={gl.id} key={index}>{gl.name}</option>
                            )
                        }

                    })}
                </select>
            </div>
        </>
    )
}


export const UIChooseLocation = () => {
    const {locationId, _handleSetLoc} = useLayoutContext()
    const [valDev, setValDev] = useState(null)

    const _handleChoose = (opt) => {
        setValDev({
            label: opt.label,
            value: opt.value
        })
        _handleSetLoc(opt.value)
        localStorage.setItem('location', opt.value)
    }

    const dataOptions = getLocations.map((gl, index) => {

        if (gl.isGroup) {
            return {
                label: gl.groupName,
                options: gl.locations.map((lc) => {
                    return {
                        label: lc.name,
                        value: lc.id
                    }
                })
            }

        } else {

            return {
                label: gl.name,
                value: gl.id
            }
        }

    }) || []

    const defaultVal = async () => {
        let placeLoc = []
        await getLocations.map((e) => {
            if (e.isGroup) {
                e.locations.map((eGroup) => {
                    placeLoc = [...placeLoc, eGroup]
                })
            } else {
                placeLoc = [...placeLoc, e]
            }
        })

        let iData = placeLoc.findIndex((e) => e.id == locationId)

        return iData > -1 ? {value: placeLoc[iData].id, label: placeLoc[iData].name} : null
    }


    useEffect(async () => {
        let dataDev = await defaultVal()
        setValDev(dataDev)
    }, [locationId])

    return (
        <>
            <ReactSelect options={dataOptions}
                         value={valDev}
                // defaultValue={valDev}
                         onChange={(opt) => _handleChoose(opt)}
                         placeholder="Choose Location"
                         className="slc"
                         instanceId="slc-gx-location"
                         classNamePrefix="slc-prefix"
                         theme={(theme) => ({
                             ...theme,
                             colors: {
                                 ...theme.colors,
                                 primary: '#f9c900',
                                 primary50: '#f9c900',
                                 primary25: 'rgb(255,246,195)',
                             }
                         })}
            />
        </>
    )
}
