import {
	config
} from '../config.js'

class Request {
	constructor() {
	    this.baseUrl = config.base_url
	}
	request({
		url,
		data = {},
		method = 'GET',
	}) {
		return new Promise((resolve , reject) => {
			this._request(url, resolve, reject, data, method)
		})
	}
	_request(url, resolve, reject, data = {}, method = 'GET') {
		uni.request({
			url: this.baseUrl + url,
			method: method,
			data: data,
			header: {
				'content-type': 'application/json',
				'appId': config.appId,
				'token': uni.getStorageSync('AuthTokens')
			},
			success: (Response) => {
				if(Response.data){
					const _success = Response.data.success;
					if(_success){
						resolve(Response.data)
					}else{
						reject(Response.data.message)
						const _message = res.data.message;
						this._show_error(error_code, _message)
					}
				}else{
					resolve(res.data)
				}
			},
			fail: (error) => {
				reject()
				this._show_error(1)
			}
		})
	}
	_show_error(error_code, _message) {
		uni.showToast({
			title: `${_message}`,
			icon: 'none',
			duration: 2000
		})
	}
}
export {
	Request
}
