const Mock = require('mockjs');
module.exports = ({arg1, arg2}) => {
	return Mock.mock({
	    'list|1-10': [{
	        'ssdemokey1|+1': 1,
	        'ssdemokey2': '@EMAIL'
	    }]
	})
}