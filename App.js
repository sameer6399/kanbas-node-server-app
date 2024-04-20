import express from 'express';
import Hello from './Hello.js';
import "dotenv/config";
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
import mongoose from "mongoose";
import UserRoutes from './Kanbas/Users/routes.js';
import session from 'express-session';
//const express = require('express')

mongoose.connect("mongodb+srv://Cluster42453:YFpCe3NrXXNu@cluster42453.swjdzbr.mongodb.net/kanbas");
const app = express()
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL,
    })
);
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.HTTP_SERVER_DOMAIN,
    };
}

app.use(
    session(sessionOptions)
);
app.use(express.json());
UserRoutes(app);
Hello(app)
ModuleRoutes(app);
AssignmentRoutes(app);
CourseRoutes(app);
Lab5(app)

app.listen(process.env.PORT || 4000)