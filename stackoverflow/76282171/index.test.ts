let samples: string[] = ["first sample foo", "second foo sample"];

// beforeAll(() => {
// samples = ["first sample foo", "second foo sample"];
// });

describe(`Test Samples`, () => {
  test.each(samples)("should include foo", (sample) => {
    expect(sample.includes("foo")).toBe(true);
  });
});
