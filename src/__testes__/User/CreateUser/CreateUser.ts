// import app from "../../../app";
// import request from "supertest";

// describe("CreateUser E2E", () => {
//   beforeAll(() => {});

//   test("POST - Payload empty", async () => {
//     const body = {};

//     const response = await request(app).post("/users").send(body);

//     expect(response.statusCode).toEqual(422);
//   });

//   // test("Payload only name", async () => {
//   //   const body = { name: "Alan" };

//   //   const response = await request(app).post("/users").send(body);

//   //   expect(response.statusCode).toEqual(422);
//   // });

//   // test("Payload with name e email", async () => {
//   //   const body = { name: "Alan", email: "alan.walkt@test.com" };

//   //   const response = await request(app).post("").send(body);

//   //   expect(response.statusCode).toEqual(422);
//   // });

//   // test("Payload with name, email, password", async () => {
//   //   const body = { name: "Alan", email: "alan.walkt@test.com", password: "123456789" };

//   //   const response = await request(app).post("").send(body);

//   //   expect(response.statusCode).toEqual(422);
//   // });

//   // test("Payload with name, email, password, confirmPassword (confirmPassword different)", async () => {
//   //   const body = { name: "Alan", email: "alan.walkt@test.com", password: "123456789", confirmPassword: "12345678" };

//   //   const response = await request(app).post("").send(body);

//   //   expect(response.statusCode).toEqual(422);
//   // });

//   // test("Payload with name, email, password, confirmPassword (confirmPassword equal)", async () => {
//   //   const body = { name: "Alan", email: "alan.walkt@test.com", password: "123456789", confirmPassword: "123456789" };

//   //   const response = await request(app).post("").send(body);

//   //   expect(response.statusCode).toEqual(201);
//   // });

//   // test("Payload full, email exist", async () => {
//   //   const body = { name: "Alan", email: "alan.walkt@test.com", password: "123456789", confirmPassword: "123456789" };

//   //   const response = await request(app).post("").send(body);

//   //   expect(response.statusCode).toEqual(422);
//   // });
// });
