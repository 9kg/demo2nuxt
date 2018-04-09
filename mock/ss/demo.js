const Mock = require('mockjs');
module.exports = ({arg1, arg2}) => {
	return Mock.mock({
	    'list|1-10': [{
	        'id|+1': 1,
	        'email': '@EMAIL'
	    }]
	})
}