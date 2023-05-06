import MockAdapter from 'axios-mock-adapter';
import apiService, { api } from "./api";

describe("apiService", () => {
  let mock: InstanceType<typeof MockAdapter>;
  beforeAll(() => {
    mock = new MockAdapter(api)
  });
  afterEach(() => {
    mock.restore();
  })
  it("should call apiService.post", async () => {
    mock.onPost('').reply(200, {
      task_id: "123"
    })
    const response = await apiService.post("", {
      requester: "example@gmail.com",
      subject: "test",
      description: "test",
      attach: false
    });
    console.log(response);
    expect(response.data.task_id).toEqual("123");
    expect(response.status).toEqual(200);
  });
});