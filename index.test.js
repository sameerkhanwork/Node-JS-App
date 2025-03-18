const request = require("supertest");
const app = require("./index");

test("GET / should return 'Hello, CircleCI!'", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello, CircleCI!");
    expect(response.statusCode).toBe(200);
});

