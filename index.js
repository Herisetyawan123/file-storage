const express = require('express');
const uploadRouter = require('./routes/upload');
const multer = require('multer');
const slugFile = require('./lib/slug-file');
const dotenv = require('dotenv');
const path = require('path')

dotenv.config();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (_, file, cb) => {
        cb(null, slugFile(file.originalname))
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype == 'image/jpg' || file.mimetype == 'image/jepg' || file.mimetype == 'image/png'){
        cb(null, true)
    }else{
        cb(null, false)
    }
}

const app = express();



app.use('/images', express.static(path.join(__dirname, 'images')))


app.use(multer({
    storage: fileStorage,
    fileFilter: fileFilter
}).single('upload'));

app.use(uploadRouter);

app.listen(3000, () => {
    console.log("http://localhost:3000");
})