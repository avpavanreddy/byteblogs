const express = require('express')
const mongoose = require("mongoose")
const dotenv = require('dotenv').config()
const cors = require('cors')
const authController = require('./controllers/authController')
const blogController = require('./controllers/blogController')
const multer = require('multer')
const app = express()

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || 8000, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Running succesfully at ", process.env.PORT)
        }
    });
}).catch((err) => {
    console.log("DB Connection Failed", err)
})

// routes
app.use('/images', express.static('public/images'))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/auth', authController)
app.use('/blog', blogController)



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        cb(null, req.body.filename)
    }
})

const upload = multer({
    storage: storage
})

app.get('/', (req, res) => {
    res.send('Hello Pavan');
});

app.post('/upload', upload.single("image"), async (req, res) => {
    return res.status(200).json({ msg: "Successfully uploaded" })
})
