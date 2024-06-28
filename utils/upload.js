import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory name
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define the upload directory dynamically
const uploadDirectory = process.env.UPLOADS_DIR || path.join(__dirname, 'uploads');

const upload = multer({ dest: uploadDirectory });

export default upload;
