describe('71772373', () => {
  it('Advance in time', async () => {
    const mockDate1 = new Date(1649272092795);
    const mockDate2 = new Date(1649272092795 + 1_000);
    jest.spyOn(global.Date, 'now').mockReturnValueOnce(mockDate1).mockReturnValueOnce(mockDate2);
    console.log('primer clg', new Date(Date.now()).toISOString());
    console.log('segundo clg', new Date(Date.now()).toISOString());
  });
});
