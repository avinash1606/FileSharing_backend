# ShareWithEase Backend

This is the backend for ShareWithEase, a file sharing application. It handles file uploads and provides endpoints to manage file downloads.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer (for file uploads)

## Setup

1. **Clone the repository:**

    ```bash
    git clone https:https://github.com/avinash1606/FileSharing_backend.git
    cd FileSharing_backend

    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory and add the following:**

    ```env
    UPLOADS_DIR=uploads
    DB_USERNAME=your_mongodb_username
    DB_PASSWORD=your_mongodb_password
    BASE_URL=https://filesharing-backend-mbmo.onrender.com
    ```

4. **Start the server:**

    ```bash
    npm start
    ```

The server will start on the port specified in the `.env` file (default is 8001).

## API Endpoints

- `POST /upload`: Upload a file.
- `GET /file/:fileId`: Download a file by its ID.

## License

This project is licensed under the MIT License.
