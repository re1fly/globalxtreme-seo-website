import axios from 'axios'
import {API_IG, URL_BASE_WP_CONTENT} from '../config/urls'

const keyCancel = {}
const CancelToken = axios.CancelToken;
export function useCancelToken(parentName) {
    if (keyCancel[parentName]) {
        keyCancel[parentName]()
    }

    return {
        cancelToken: new CancelToken(function executor(c) {
            keyCancel[parentName] = c;
        })
    }
}

export function argCancelToken(err) {
    if (axios.isCancel(err)) {
        return {status: 'cancel'}
    }
}

export function argCatchMsg(err) {
    if (err !== null && err.message && err.message !== undefined) {
        return true
    }
    return false
}

export async function get(baseURL = '', url, others = {}) {
    let passBaseURL = baseURL ? {baseURL: baseURL} : ''
    return await axios({
        // baseURL: baseURL,
        method: 'GET',
        url: url,
        ...passBaseURL,
        ...others
    })
}


export function shapeGetThen(baseURL, url, tokenCancel = '') {
    const others = tokenCancel ? {...useCancelToken('tokenCancel-'+tokenCancel)} : {}
    return get(baseURL, url)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            if (tokenCancel || argCatchMsg(err)) {
                return {
                    status: 'cancel',
                    msg: err.message
                }
            } else {
                return argCancelToken(err)
            }
        })
}


// SET UP BY GROUP
export function shapeGetThenByWP(url, tokenCancel = '') {
    const baseURLWP = URL_BASE_WP_CONTENT
    const others = tokenCancel ? {...useCancelToken('tokenCancel-'+tokenCancel)} : {}
    return get(URL_BASE_WP_CONTENT, url)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            if (tokenCancel || argCatchMsg(err)) {
                return {
                    status: 'cancel',
                    msg: err.message
                }
            } else {
                return argCancelToken(err)
            }
        })
}


export function shapeGetThenByIG(url, tokenCancel = '') {
    const baseURLWP = API_IG

    return get(baseURLWP, url)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            if (tokenCancel || argCatchMsg(err)) {
                return {
                    status: 'cancel',
                    msg: err.message
                }
            } else {
                return argCancelToken(err)
            }
        })
}
