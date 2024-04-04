import express from "express";
import fs from "fs/promises";
import path from "path";

const app = express();

async function organizeFiles() {
    try {
        const files = await fs.readdir("D:\\Vivek\\backend_dev\\backend_webdevelopment\\organisefiles\\files");
        const extensions = new Set();

        for (const item of files) {
            const ext = path.extname(item).slice(1); // Get file extension
            extensions.add(ext);
        }

        for (const ext of extensions) {
            const folderPath = `D:\\Vivek\\backend_dev\\backend_webdevelopment\\organisefiles\\${ext}`;
            await fs.mkdir(folderPath, { recursive: true });
        }
        console.log("Directories created successfully.");
        console.log(files)

        for (const item of files) {
            const ext = path.extname(item).slice(1);
            const oldPath = `D:\\Vivek\\backend_dev\\backend_webdevelopment\\organisefiles\\files\\${item}`;
            const newPath = `D:\\Vivek\\backend_dev\\backend_webdevelopment\\organisefiles\\${ext}\\${item}`;
            await fs.rename(oldPath, newPath);
        }
    } catch (error) {
        console.error("Error organizing files:", error);
    }
}

organizeFiles();
