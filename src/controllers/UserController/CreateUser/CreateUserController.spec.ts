describe("CreateUserController", () => {
  test("Payload without req.body", () => {
    const nome = "Alex";
    expect(nome).toEqual("Alex");
  });
});
