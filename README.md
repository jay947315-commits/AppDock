# AppDock

A simple APK upload portal for sharing Android APK files.

## Features

- Upload APK files from the browser
- Add app name, version, package name and description
- Store uploaded APKs on the server
- Download APKs directly from the list
- Clean responsive dashboard

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Open your browser at:
   ```text
   http://localhost:3000
   ```

## Notes

- Uploaded files are stored in the `uploads/` folder.
- App metadata is stored in `data/apps.json`.
- The app accepts `.apk` files up to 200 MB.
