const { createApiInstance } = require("./api");

jest.mock("./api");

describe("Foo", () => {
  describe("findFoo", () => {
    it("foos", async () => {
      expect(jest.isMockFunction(createApiInstance)).toBeTruthy();
      const mockApi = jest.fn().mockResolvedValue('test data');
      createApiInstance.mockReturnValueOnce(mockApi);
      const { findFoo } = require("./foo");
      const res = await findFoo("foo");
      expect(res).toEqual('test data');
    });
  });
});
