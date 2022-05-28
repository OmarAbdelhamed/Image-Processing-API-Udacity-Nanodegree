import express from "express";
import routes from "./routes/index";

const app = express();
const port = 3001;

app.get("/", (req: express.Request, res: express.Response): void => {
  res.status(200).send("Hello");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`sever started at local host ${port}`);
});

export default app;
