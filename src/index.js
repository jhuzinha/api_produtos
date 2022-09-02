import express, { json } from "express";
import router from './Routers/index.js';
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(json());
app.use(cors());
app.use(router);


const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(`Server com TS rodando na porta: ${PORT}`);
});