let BASE_URL = ''
if (process.env.NODE_ENV == 'development') {
    BASE_URL = '192.168.1.1:8090' // 测试环境
} else {
    BASE_URL = 'https://www.baidu.com' // 生产环境
}
const config = {
	base_url: BASE_URL,
	appId: 'wx9c378adf5e81b917',
	appKey: '397f50d5599e194921f4165c4a33c71b'
}

export { config }