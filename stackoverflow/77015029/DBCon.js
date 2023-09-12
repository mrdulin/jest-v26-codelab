let pool;
export default function getPool() {
	if (!pool) {
		console.log('connecting to Mysql');
		pool = mysql.createPool(dbConfig);
	}
	return pool;
}
