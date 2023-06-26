const { Router } = require('express');


const uploadRouter = Router();

uploadRouter.post('/upload', (req, res) => {
    const file = req.file
    if (!file){
        return res.status(422).send({
            message: 'you have not image to upload'
        })
    }

    return res.status(202).send({
        message: 'berhasil diupload',
        path:  'http://localhost:3000/'+file.path,
    })
});

module.exports = uploadRouter