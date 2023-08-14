
const express = require("express")
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(cors())


port = 3000


app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
    res.sendFile(__dirname, "public", "index.html");
})


//post request

app.post("/post", (req, res) => {

    try {

        const data = req.body

        if (req.is('json') && typeof data === 'object') {

            res.status(200).json(data)
        } else {
            res.status(400).json({ error: "Invalid JSON format" })
        }
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Error getting the post request' });
    }



})


//establishing connection
app.listen(port, () => {

    try {
        console.log(`server is running on port ${port}`)
    } catch (error) {

        console.log({ "msg": "error connecting to server" })

        console.log({ "error": error })


    }
})
