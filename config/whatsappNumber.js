import {GX_BALI_KEROBOKAN, GX_BALI_DENPASAR, GX_BALIKPAPAN, GX_SAMARINDA, GX_MALANG,} from './locations'

const objWANumber = (id, number) => ({id: id, number: number})
export const waNumbers = [
    objWANumber(GX_BALI_KEROBOKAN, '6287861200011'),
    objWANumber(GX_BALI_DENPASAR, '6281910009387'),
    objWANumber(GX_SAMARINDA, '6283119924666'),
    objWANumber(GX_BALIKPAPAN, '6283119924666'),
]


export const getLinkRedirectWA = (locationId = '') => {
    const getNumber = waNumbers.find((e) => e.id == locationId)
    const number = getNumber ? getNumber.number : waNumbers[0].number
    const waURL = 'https://wa.me/' + number + '?text=I%27m+interested+in+your+package+deals%0A+Saya+ingin+tahu+tentang+paket+internet+anda'
    return waURL
}
