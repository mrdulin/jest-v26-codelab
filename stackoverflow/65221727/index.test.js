const fs = require("fs");
const path = require("path");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("65221727", () => {
  it("should pass", () => {
    const html = fs.readFileSync(
      path.resolve(__dirname, "./index.html"),
      "utf8"
    );
    const { window } = new JSDOM(html, {
      url: "http://foo.exmaple.org",
      runScripts: "dangerously",
    });

    const doSomething = window.doSomething;
    expect(doSomething(2, 2)).toBe(4);
  });
});
