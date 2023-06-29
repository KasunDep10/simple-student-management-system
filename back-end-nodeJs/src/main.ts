import express, {json} from "express";
import {student as StudentHttpController} from "./api/StudentHttpController"
import cors from 'cors';

const app = express();

app.use(cors());
app.use(json());
app.use('/api/v1/students', StudentHttpController);
app.listen(8081, ()=> console.log("Server has been started at 8081"));
