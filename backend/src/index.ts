import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
