import { MongoDbConnection } from './bd.js';
import express, { json } from 'express'
import cors from 'cors'
const app = express()
const port = 3000

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.use(
cors (
{
'origin': ['http://127.0.0.1:5500', 'http://localhost:5500', 'http://127.0.0.1:3000', 'http://localhost:3000'],
preflightContinue:true
}
)
)

app.listen(port, () => {
console.log(Example app listening on port ${port})
})

app.post('/login',async (req, res)=>{
console.log(req.body)

const conn_db = await new MongoDbConnection('test', 'users')
let data = await conn_db.find_one({email:req.body.user, password:req.body.password})

console.log(data)
res.setHeader('Content-Type', 'application/json');
    return res.json({message: 'información encontrada', mdb_data:data})
    })
