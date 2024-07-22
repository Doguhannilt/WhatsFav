import cookieParser from "cookie-parser";
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

export const middlewares = (app) => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
        app.use(cookieParser())
        app.use(express.static(path.join(__dirname, 'public')));
    } catch (error) {
        console.log(error)
    }
}