const mongoose = require('mongoose');

let conn = null;

const uri = 'mongodb://ec2-34-200-238-8.compute-1.amazonaws.com:27017/apidb';

exports.handler = async (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false;
	
	if (conn == null) {
		conn = await mongoose.createConnection(uri);
		conn.model('Country', new mongoose.Schema({
			name: String,
			region: String,
			tld: String,
		}));
	}

	const Country = conn.model('Country');
	let docs = await Country.find({ 'name.common': 'Austria' });
	// conn.close();
	// console.log(docs)
	return docs;
};