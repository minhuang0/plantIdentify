import wepy from 'wepy'
import { HOST } from '@/modules/config'
import utils from './utils'

let cookie = ''
export const fetch = (url, options, query = {}) => {
    if (!options.noAjax) {
        query.type = 'ajax'
    }
    const fullUrl = utils.fullUrl(HOST, url, query)
    return new Promise((resolve, reject) => {
        return wepy.request({
            url: fullUrl,
            header: Object.assign({
                Cookie: cookie
            }, options.header || {}),
            data: options.data,
            method: options.method,
            success: (res) => {
                if (res.header['Set-Cookie']) {
                    cookie = res.header['Set-Cookie']
                }
                return res.statusCode === 200 ? resolve(res.data) : reject(res)
            },
            fail: reject
        })
    })
}

export const uploadFile = (url, filePath, formData = {}) => {
    console.log(filePath, formData)
    const fullUrl = utils.fullUrl(HOST, url)
    return new Promise((resolve, reject) => {
        wepy.uploadFile({
            url: fullUrl,
            filePath,
            name: 'file',
            formData,
            header: {
                Cookie: cookie
            },
            success (res) {
                return res.statusCode === 200 ? resolve(res.data) : reject(res)
            },
            fail: reject
        })
    })
}

export const chooseImage = (options) => {
    return new Promise((resolve, reject) => {
        wepy.chooseImage(Object.assign({
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: resolve,
            fail: reject
        }, options))
    })
}

export const getFetch = (url, options = {}, query) => {
    options.method = 'GET'
    return fetch(url, options, query)
}

export const postFetch = (url, options = {}, query) => {
    options.method = 'POST'
    return fetch(url, options, query)
}
