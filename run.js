const index = require('./index')

async function run () {
	let result = await index.handler({}, {}, () => { });
	console.log(result);
	// console.log('done');
	// process.exit();
	// console.log(process._getActiveRequests());
}

run();