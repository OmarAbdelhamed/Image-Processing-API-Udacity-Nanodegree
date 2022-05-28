import sharp from "sharp";
import Paths from "./Paths";
import { resizeInterface } from "./interfaces";

export async function resize(params: resizeInterface) {
  try {
    await sharp(Paths.inputPath + "/" + params.name)
      .resize({
        width: params.width ?? 500,
        height: params.height ?? 500
        
      })
      
      .toFormat("jpg")
      .toFile(Paths.outputPath + "/" + params.output);
  } catch (error) {
    console.log(error);
  }
}
