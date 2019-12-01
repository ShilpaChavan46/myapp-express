const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select id, title, address from company`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/', (request, response) => {
    const {title, address} = request.body
    const connection = db.connect()
    const statement = `insert into company (title, address) values ('${title}', '${address}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.put('/:id', (request, response) => {
    const id = request.params.id
    const {title, address} = request.body
    const connection = db.connect()
    const statement = `update company set name = '${title}', address = '${address}' where id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:id', (request, response) => {
    const id = request.params.id
    const connection = db.connect()
    const statement = `delete from company where id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

module.exports = router