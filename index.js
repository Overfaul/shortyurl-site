const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/', require('./routes/urlRouter'))

async function main() {
    try{
        mongoose.connect(process.env.DB_URL,
            {
                useNewUrlParser: true,
            },
            app.listen(process.env.PORT, () => {
                console.log('Server has been started! PORT ')
            })
        );
    }catch(error){
        console.log(error)
    }
}
main()