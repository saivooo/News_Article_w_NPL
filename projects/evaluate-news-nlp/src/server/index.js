const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
// const bodyParser = require('body-parser')
// app.use(bodyParser.json());
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const multer = require('multer');
const upload = multer();
// // const axios = require('axios');

app.use(express.static('dist'))

console.log(__dirname)
const key = process.env.API_KEY
apiUrl = "https://api.meaningcloud.com/sentiment-2.1"

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('dist/index.html'))
})

app.post('/test', upload.none(), async (req, res) => {
    try {
        res.setHeader('Content-Type', 'application/json')
        req.body.key = key;
        const sentiment = await fetch(`${apiUrl}&key=${req.body.key}&lang=${req.body.lang}&txt=${req.body.txt}`)
        const articleResponse = await sentiment.json()
        const returnData = {
            sentence: articleResponse.sentence_list,
            subjectivity: articleResponse.subjectivity,
            confidence: articleResponse.confidence,
            irony: articleResponse.irony,
        }
        console.log("--------------------------------------------------------------------------")
        console.log(returnData)
        res.json(returnData)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
        console.log(error.message)
    }
})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

