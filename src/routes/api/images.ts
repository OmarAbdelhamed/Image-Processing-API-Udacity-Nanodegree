import express, { Request, Response } from "express";
import ResizeQueryValidator from "../../utilities/Validation";
import Paths from "../../utilities/Paths";
import fs from "fs";
import { resize } from "../../utilities/resizefunc";

const images = express.Router();

images.get("/resize", async (request: Request, response: Response): Promise<void> => {
  const validate = await ResizeQueryValidator(request.query);
  if (typeof validate == "boolean") {
    const sourceName = (request.query.name as string).split(".")[0];
    const defaultName =
      sourceName + "-" + request.query.width + "x" + request.query.height + ".jpg";
    const checkIfExist = fs.existsSync(Paths.outputPath + "/" + defaultName);
    if (checkIfExist) {
      response.sendFile(Paths.outputPath + "/" + defaultName);
    } else {
      await resize({
        name: request.query.name as string,
        width: parseInt(request.query.width as string),
        height: parseInt(request.query.height as string),
        output: defaultName
      });
      response.sendFile(Paths.outputPath + "/" + defaultName);
    }
  } else {
    response.status(400).json(validate);
  }
});

export default images;
