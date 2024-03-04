import express from "express";
import morgan from "morgan";
import tasksRoutes from "./routes/tasks.routes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173/",
    credentials: true,
  })
);

app.use(morgan("tiny"));
app.use(express.json());

// app.use('/', (req, res) => {
//     res.send('Bienvenidas al Himalaya ❄⛰')
// })

app.use("/api", tasksRoutes);

export default app;
