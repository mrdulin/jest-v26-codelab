describe('67618056', () => {
  it('should pass', () => {
    document.body.innerHTML = `
        <div class='wrapper'>
            <span>test</span>
        </div>
    `;
    expect(document.body.innerHTML.toString()).toMatchInlineSnapshot(`
      "
              <div class=\\"wrapper\\">
                  <span>test</span>
              </div>
          "
    `);
  });
});
