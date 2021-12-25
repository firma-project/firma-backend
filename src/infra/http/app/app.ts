import "./setup";

import express from "express";
import cors from "cors";

import { setupRoute } from "./route";


const app = express();
app.use(cors());
app.use(express.json());
setupRoute(app);

export default app;
