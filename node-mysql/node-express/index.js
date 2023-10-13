const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql')
const db_config = {
    host: 'nodedb',
    user: 'root',
    database: 'nodedb'
}

app.post('/', (req, res) => {
    const connection = mysql.createConnection(db_config)
    const sql = `INSERT INTO people(name) values ('?')`
    connection.query(sql, req.body)
    connection.end()

    res.send('<h1>Express running</h1>')
})

app.get('/', (req, res) => {
    const connection = mysql.createConnection(db_config)
    const sql = `SELECT name FROM people ORDER BY RAND() LIMIT 1`
    connection.query(sql, function(err, result) {
        if (err) res.status(500).send(err)
        res.status(200).send('<h1>Hello '+result[0].name+'</h1>')
    })
    connection.end()
})

app.listen(port, () => {
    console.log('Running at port ' + port)
})