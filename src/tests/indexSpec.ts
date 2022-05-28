import supertest from "supertest";
import app from "../index";

// create a request object
const request = supertest(app);

describe("Endpoints Response", (): void => {
  describe("Home Page", (): void => {
    it("/", async (): Promise<void> => {
      const response = await request.get("/");
      expect(response.status).toBe(200);
    });
  });
  describe("Image API", (): void => {
    it("Check /api/resize", async (): Promise<void> => {
      const response = await request.get("/api/resize?name=encenadaport.jpg&width=500&height=500");
      expect(response.status).toEqual(200);
    });
  });
});
