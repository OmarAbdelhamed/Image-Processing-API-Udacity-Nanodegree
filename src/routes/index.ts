import express from "express";
import image from "./api/images";

const routes = express.Router();
routes.get("/", (req: express.Request, res: express.Response): void => {
  res.status(200).send("API");
});

routes.use("/", image);

export default routes;
