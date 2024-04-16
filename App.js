import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
import mongoose from "mongoose";
import UserRoutes from './Kanbas/Users/routes.js';
//const express = require('express')

mongoose.connect("mongodb+srv://Cluster42453:YFpCe3NrXXNu@cluster42453.swjdzbr.mongodb.net/kanbas");
const app = express()
app.use(cors());
app.use(express.json());
UserRoutes(app);
Hello(app)
ModuleRoutes(app);
AssignmentRoutes(app);
CourseRoutes(app);
Lab5(app)

app.listen(process.env.PORT || 4000)