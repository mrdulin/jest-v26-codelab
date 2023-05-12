describe('76233061', () => {
  test('should pass', () => {
    const response = {
      output: {
        data: {
          results: [1]
        }
      }
    }
    expect(response.output.data.results).toSatisfy((x) => Array.isArray(x) && x.length > 0);
    expect(response.output.data.results).toBeArrayOfSize(1);
  })
})