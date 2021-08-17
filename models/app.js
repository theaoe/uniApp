import { Request } from '../utils/request.js'

class AppModel extends Request {
	login(params) {
        return this.request({
            url: "/user/login",
			method: 'POST',
			data: params
        })
    }
}

export { AppModel }