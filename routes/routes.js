import express from 'express';
import { uploadImage, downloadImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';

export const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', downloadImage);

// Add a route for the root URL
router.get('/', (req, res) => {
    res.send('Welcome to the File Sharing Service API');
});

// Handle undefined routes
router.all('*', (req, res) => {
    res.status(404).send('Route not found');
});

