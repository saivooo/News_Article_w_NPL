const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const app = express()
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

app.post(apiUrl, async (req, res) => {
    const data = req.body.formData
    const requestBody = {
        data: data,
        key: key
    }

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: JSON.stringify(requestBody)
        });
        const responseData = await response.json();
        res.json(responseData);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

