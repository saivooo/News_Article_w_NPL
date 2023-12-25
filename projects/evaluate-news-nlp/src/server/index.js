const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const app = express()
// // const axios = require('axios');
const bodyParser = require('body-parser')
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)
const key = process.env.API_KEY
apiUrl = "https://api.meaningcloud.com/sentiment-2.1"

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('dist/index.html'))
})

app.post('/test', async (req, res) => {
    try {
        // console.log(req.body.txt)
        const sentiment = await fetch(`${apiUrl}&key=${key}&txt=${req.body.txt}&lang=${req.body.lang}`)
        const articleResponse = await sentiment.json()
        console.log(articleResponse)
        const returnData = {
            sentence: articleResponse.sentence_list,
            subjectivity: articleResponse.subjectivity,
            confidence: articleResponse.confidence,
            irony: articleResponse.irony,
            segmentedCoceptList: articleResponse.segmentedCoceptList
        }
        res.send(returnData)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
        console.log(error.message)
    }
})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

