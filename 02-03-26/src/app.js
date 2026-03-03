import express from 'express'
// import userServecie.js 

const app = express () 
app.use(express.json())

app.post('/users', (req, res))