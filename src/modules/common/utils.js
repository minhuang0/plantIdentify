import { differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays, differenceInWeeks, differenceInMonths, differenceInYears } from 'date-fns'

exports.paddingImg = (images, len = 3) => {
    if (images.length === 0) {
        return []
    }
    let maxLen = images.length % len === 0 ? parseInt(images.length / len) : parseInt(images.length / len) + 1
    let imgs = []
    images.forEach((img, index) => {
        let idx = parseInt(index / 3)
        if (!Array.isArray(imgs[idx])) {
            imgs[idx] = []
        }
        imgs[idx].push(img)
    })
    if (len - imgs[maxLen - 1].length > 0) {
        imgs[maxLen - 1] = imgs[maxLen - 1].concat(Array.from(new Array(len - imgs[maxLen - 1].length), () => ''))
    }
    return imgs
}

function stringifyPrimitive (v) {
    switch (typeof v) {
        case 'string':
            return v
        case 'boolean':
            return v ? 'true' : 'false'
        case 'number':
            return isFinite(v) ? v : ''
        default:
            return ''
    }
}

function querystring (obj = {}, options = {}) {
    const { sequence = [] } = options
    const defaultSeparator = '&'
    const stringifiedKeyMap = {}

    const reducer = (str, key) => {
        const separator = str ? '&' : ''
        if (!stringifiedKeyMap[key]) {
            stringifiedKeyMap[key] = true
            if (typeof obj[key] !== 'undefined') {
                return `${str}${separator}${encodeURIComponent(stringifyPrimitive(key))}=${encodeURIComponent(stringifyPrimitive(obj[key]))}`
            }
        }
        return str
    }

    const sequencePart = sequence.reduce(reducer, '')
    const noneSequencePart = Object.keys(obj).reduce(reducer, '')
    return `${sequencePart}${sequencePart && noneSequencePart ? defaultSeparator : ''}${noneSequencePart}`
}

exports.fullUrl = (API_HOST, url, query = {}) => {
    const qs = querystring(query)
    let retUrl = ''
    if (/\/\//.test(url) || /^https?:\/\//.test(url)) {
        retUrl = url
    } else {
        retUrl = `${API_HOST}${url}`
    }

    if (qs) {
        return `${retUrl}?${qs}`
    }
    return retUrl
}

exports.timeTransform = (time) => {
    const now = new Date()
    const diffYears = differenceInYears(now, time)
    const diffMonths = differenceInMonths(now, time)
    const diffWeeks = differenceInWeeks(now, time)
    const diffDays = differenceInDays(now, time)
    const diffHours = differenceInHours(now, time)
    const diffMins = differenceInMinutes(now, time)
    const diffSeconds = differenceInSeconds(now, time)
    return diffYears ? `${diffYears}年前` : diffMonths ? `${diffMonths}月前` : diffWeeks ? `${diffWeeks}周前` : diffDays ? `${diffDays}天前` : diffHours ? `${diffHours}小时前` : diffMins ? `${diffMins}分钟前` : diffSeconds > 10 ? `${diffSeconds}秒前` : '刚刚'
}

exports.maxLength = (str, length = 25) => {
    return str.length > length ? `${str.slice(0, length - 1)}...` : str
}
