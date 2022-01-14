const { searchBtn } = require('./SearchBtn');

describe('65737249', () => {
  test('going to try the btn', () => {
    function triggerSearch() {}
    expect(JSON.stringify(searchBtn(triggerSearch))).toEqual(
      JSON.stringify(
        <div className="d-flex justify-content-center my-3">
          <input
            type="submit"
            className="btn btn-primary w-25"
            value="Search"
            onClick={(e) => {
              e.preventDefault();
              triggerSearch();
            }}
          ></input>
        </div>
      )
    );
  });

  test('better', () => {
    function triggerSearch() {}
    expect(searchBtn(triggerSearch)).toMatchInlineSnapshot(`
      <div
        className="d-flex justify-content-center my-3"
      >
        <input
          className="btn btn-primary w-25"
          onClick={[Function]}
          type="submit"
          value="Search"
        />
      </div>
    `);
  });
});
