import express from 'express';
import { uploadImage,downloadImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';



export const router=express.Router();

router.post('/upload',upload.single('file'),uploadImage);


router.get('/file/:fileId',downloadImage);