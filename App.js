import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
//const express = require('express')

const app = express()
app.use(cors());
app.use(express.json());
Hello(app)
ModuleRoutes(app);
AssignmentRoutes(app);
CourseRoutes(app);
Lab5(app)

app.listen(process.env.PORT || 4000)