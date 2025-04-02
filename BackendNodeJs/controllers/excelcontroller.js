const express = require('express')
const router = express.Router()
const excelServices = require('../services/excelservice')
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/'); // Save files in the uploads folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/upload', upload.single('excel'), excelServices.uploadExcel);


module.exports=router