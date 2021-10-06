import {shapeGetThenByIG} from './configAxios'

export const getFeeds = (token, parameter = '') => {
    let addKey = parameter||''
    let url = `me/media?fields=media_count,media_type,permalink,media_url&&access_token=${token}${addKey}`
    return shapeGetThenByIG(url)
}
