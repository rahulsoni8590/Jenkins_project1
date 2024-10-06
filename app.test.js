// app.test.js

const request = require("supertest");
const { app } = require("./app.js");

describe("GET /", () => {
    it("should return 'Welcome to App'", async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toEqual("Welcome to App");
    });
});
// Use toEqual for String Comparison: While toBe works for string comparison in this context, toEqual is more semantically appropriate for checking the equality of two strings.