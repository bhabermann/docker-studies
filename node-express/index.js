const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql')
const db_config = {
    host: 'db',
    user: 'root',
    database: 'nodedb'
}
const connection = mysql.createConnection(db_config)
const sql = `INSERT INTO people(name) values ('Hella')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Express running</h1>')
})

app.listen(port, () => {
    console.log('Running at port ' + port)
})