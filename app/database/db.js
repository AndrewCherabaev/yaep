const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('storage/database.json');
const db = lowdb(adapter);


var tt = {};
var tablenames = [
		'users'
	];

tablenames.forEach(t=>{if(!db.has(t).value()){db.set(t,[]).write()};tt[t] = db.get(t);});

module.exports = tt;