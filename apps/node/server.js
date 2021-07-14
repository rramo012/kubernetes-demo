const express = require('express');
const { Pool } = require('pg')
const app = express();
var os = require("os");

app.get( '/', async ( req, res ) => {
	const createTable = `CREATE TABLE IF NOT EXISTS traffic (id SERIAL,hostname TEXT NOT NULL,created_at timestamp);`;
	await pool.query( createTable );

	// Insert New page visit.
	const insert = `INSERT INTO traffic(hostname, created_at) VALUES ( $1, now() ) RETURNING *`;
	const values = [ os.hostname() ]
	const pool = new Pool();
	await pool.query( insert, values );

	// Get all hostnames.
	const queryResult = await pool.query( `select distinct(hostname) from traffic` );

	// Select counts of each.
	const counts = {};
	for ( let row of queryResult.rows ) {
		const countResult = await pool.query( 'select count(*) from traffic where hostname = $1', [ row.hostname ] );
		counts[ row.hostname ] = countResult.rows[0].count;
	}

	await pool.end()

	res.send(counts);
} );

app.listen( 9000, () => console.log( 'Example app is listening on port 9000.' ) );

