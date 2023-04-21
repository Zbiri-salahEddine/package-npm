const express = require('express')
const app = express()
const port = 3000
const func = require('package-npm-concat')

let sepa = ' / ';
let Array = ['salah' , 'zbiri' , '22'];

let result = func(Array , sepa)

app.get('/', (req, res) => {
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})