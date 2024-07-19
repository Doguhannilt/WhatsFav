import cookieParser from "cookie-parser";
import express from 'express'

export const middlewares = (app) => {
    try {
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
        app.use(cookieParser())
    } catch (error) {
        console.log(error)
    }
}