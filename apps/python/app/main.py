from fastapi import FastAPI
import psycopg2
import os

app = FastAPI()

@app.get("/")
def read_root():
	# Connect to Database
	conn = psycopg2.connect(
	host=os.environ['PGHOST'],
	database=os.environ['PGDATABASE'],
	user=os.environ['PGUSER'],
	password=os.environ['PGPASSWORD'])

	# Get all hostnames.
	cur = conn.cursor()
	cur.execute("INSERT INTO traffic(hostname, created_at) VALUES ( %s, now() )", (os.environ['HOSTNAME'],) )
	conn.commit()

	# Select counts of each.
	counts = {}
	cur.execute( 'select distinct(hostname) from traffic;' )
	for i in cur.fetchall():
		cur.execute( 'select count(*) from traffic where hostname = %s;', (i[0],) )
		counts[i[0]] = cur.fetchone()[0]

	return counts
