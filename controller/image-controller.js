import File from "../models/file.js";
import dotenv from 'dotenv';

dotenv.config();

export const uploadImage = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname,
    };

    try {
        const file = await File.create(fileObj);
        console.log(file);

        // Constructing the download URL based on environment
        let downloadURL;
        if (process.env.BASE_URL) {
            downloadURL = `${process.env.BASE_URL}/file/${file._id}`;
        } else {
            // Fallback for localhost
            const port = process.env.PORT || 8001; // Use your local server port
            downloadURL = `http://localhost:${port}/file/${file._id}`;
        }

        response.status(200).json({ path: downloadURL });
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
};

export const downloadImage = async (request, response) => {
    try {
        const file = await File.findById(request.params.fileId);
        if (!file) {
            return response.status(404).json({ error: 'File not found' });
        }

        file.downloadContent++;
        await file.save();

        response.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
};
