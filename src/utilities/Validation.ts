import validator from "validator";
import { QueryInterface } from "./interfaces";
import fs from "fs";
import Paths from "./Paths";

const ResizeQueryValidator = async (params: QueryInterface): Promise<boolean | string> => {
  if (!params.width || !params.height || !params.name) {
    return "Parameter {width & height & name} Cant Be Empty";
  }

  if (!validator.isInt(params.width)) {
    return "Width Should be Integer";
  }
  if (parseInt(params.width) <= 50) {
    return "Width Should More Then 50px";
  }

  if (!validator.isInt(params.height)) {
    return "Height Should be Integer";
  }

  if (parseInt(params.height) <= 50) {
    return "Height Should be More Then 50px";
  }
  if (!fs.existsSync(Paths.inputPath + "/" + params.name)) {
    return "Image Selected Is Not Found in images Directory";
  }
  return true;
};

export default ResizeQueryValidator;
